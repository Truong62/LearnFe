import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Silce/cartSile';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;