import { IItem } from '@/features/cartSlice'
import { FC } from 'react'

interface ICartItemProps {
  item: IItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  return (
    <div className='w-5/6 h-16 border-2 border-blue-800 rounded-lg p-5 text-xl font-bold flex justify-between items-center mb-5'>
      <span>{item.name}</span>
      <span>${item.price}</span>
    </div>
  )
}

export default CartItem
