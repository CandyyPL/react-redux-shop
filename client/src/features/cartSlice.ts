import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '@/types/cart'
import { IItem } from '@/types/item'

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItem>) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<IItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
