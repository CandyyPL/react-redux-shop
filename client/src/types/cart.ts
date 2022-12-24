import { IItem } from '@/types/item'

export interface ICartState {
  items: IItem[]
}

export const initialState: ICartState = {
  items: [],
}
