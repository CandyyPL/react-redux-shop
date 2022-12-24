import { Injectable } from '@nestjs/common'
import { items } from '@/items'
import { IItem } from '@/types/item'
import { Stripe } from 'stripe'

interface IRequest {
  body: {
    items: number[]
  }
}

@Injectable()
export class AppService {
  getItems(): IItem[] {
    return items
  }

  async getCheckout(req: IRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-08-01' })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map((id) => {
        const storeItem = items.find((i: IItem) => i.id === id)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.price,
          },
          quantity: 1,
        }
      }),
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    })

    return { url: session.url }
  }
}
