import { FC, useEffect } from 'react'
import { addToCart, removeFromCart } from '@/features/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { IItem } from '@/types/item'

interface IItemProps {
  item: IItem
}

const Item: FC<IItemProps> = ({ item }) => {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className='w-80 h-80 border-2 border-zinc-800 place-self-center flex flex-col justify-around items-center'>
      <div className='w-5/6 h-4/6 flex justify-center items-center'>
        <img src='https://via.placeholder.com/512' className='h-full' />
      </div>
      <div className='w-full h-1/5 flex justify-around items-center p-2'>
        <div className='w-4/5 h-full flex flex-col justify-evenly items-center'>
          <span className='w-4/5 text-xl font-bold'>{item.name}</span>
          <span className='w-4/5 text-xl'>${item.price}</span>
        </div>
        {cart.items.includes(item) ? (
          <button
            className='w-14 h-14 bg-red-500 text-3xl font-bold flex justify-center items-center rounded-md'
            onClick={() => dispatch(removeFromCart(item))}>
            -
          </button>
        ) : (
          <button
            className='w-14 h-14 bg-blue-500 text-3xl font-bold flex justify-center items-center rounded-md'
            onClick={() => dispatch(addToCart(item))}>
            +
          </button>
        )}
      </div>
    </div>
  )
}

export default Item
