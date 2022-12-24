import { FC, useEffect, useState } from 'react'
import Item from '@/components/Item'
import axios from 'axios'
import { IItem } from '@/types/item'

const ItemsList: FC = () => {
  const [items, setItems] = useState<IItem[]>([])

  const getItems = async () => {
    const items = await axios.get('http://localhost:3000/items')
    items.data.forEach((item: IItem) => (item.price /= 100))
    setItems(items.data)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='w-3/5 h-full p-10 grid grid-cols-3 grid-rows-2'>
      {items && items.map((item) => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemsList
