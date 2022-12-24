import Cart from '@/components/Cart'
import Item from '@/components/Item'
import ItemsList from '@/components/ItemsList'
import Topbar from '@/components/Topbar'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center bg-slate-200'>
      <Topbar />
      <div className='w-full h-full flex justify-center items-center'>
        <ItemsList />
        <Cart />
      </div>
    </div>
  )
}

export default Home
