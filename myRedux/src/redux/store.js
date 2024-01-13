import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slice/cartSilec"
export const store = configureStore({
  reducer: {
    cart: productReducer
  },
})