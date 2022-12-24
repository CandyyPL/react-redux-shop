import { RootState } from '@/store'
import { FC } from 'react'
import { useSelector } from 'react-redux'

const Topbar: FC = () => {
  const cart = useSelector((state: RootState) => state.cart)

  return (
    <div className='w-full h-24 bg-blue-600 flex justify-between items-center px-10'>
      <span className='text-4xl font-bold text-slate-100'>Redux Sweetshop</span>
      <span className='text-2xl text-slate-100'>{cart.items.length} items in cart</span>
    </div>
  )
}

export default Topbar
