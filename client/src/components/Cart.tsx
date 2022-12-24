import CartItem from '@/components/CartItem'
import { RootState } from '@/store'
import axios from 'axios'
import { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart: FC = () => {
  const cart = useSelector((state: RootState) => state.cart)

  const [totalPrice, setTotalPrice] = useState(0)
  const [ids, setIds] = useState<number[]>([])

  const checkoutButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    checkoutButtonRef.current?.removeAttribute('disabled')
  }, [])

  useEffect(() => {
    let price = 0
    cart.items.forEach((item) => (price += item.price))
    setTotalPrice(price)

    let tempIds: number[] = []
    cart.items.forEach((item) => tempIds.push(item.id))
    setIds(tempIds)
  }, [cart.items])

  const handleCheckout = async (items: number[]) => {
    checkoutButtonRef.current?.setAttribute('disabled', '')
    await axios
      .post('http://localhost:3000/checkout', { items })
      .then((res) => (window.location = res.data.url))
  }

  return (
    <div className='w-2/5 h-full p-4 flex flex-col justify-start items-center'>
      <h1 className='text-4xl font-bold'>Your cart</h1>
      <div className='w-full h-1 bg-black mt-5 mb-10'></div>
      <ul className='w-full h-full flex flex-col items-center'>
        {cart.items && cart.items.map((item) => <CartItem item={item} key={item.id} />)}
      </ul>
      {cart.items.length > 0 && (
        <>
          <div className='w-full h-1 bg-black mt-5 mb-10'></div>
          <div className='w-full h-14 flex flex-row justify-between items-center p-4'>
            <span className='text-2xl font-bold'>Total price: ${totalPrice}</span>
            <button
              className='w-24 h-12 border-2 text-xl font-bold border-black bg-slate-100 hover:text-slate-100 hover:bg-black transition-all disabled:border-gray-500 disabled:hover:bg-slate-100 disabled:text-gray-500 disabled:hover:text-gray-500'
              onClick={() => handleCheckout(ids)}
              ref={checkoutButtonRef}>
              Buy
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
