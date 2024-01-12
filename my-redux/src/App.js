import { addItem, clearCart, removeItem } from './redux/Silce/cartSile';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const productArr = [
  { id: 1, name: "san pham 1", price: 1000 },
  { id: 2, name: "san pham 2", price: 2000 },
  { id: 3, name: "san pham 3", price: 3000 },
  { id: 4, name: "san pham 4", price: 4000 },
  { id: 5, name: "san pham 5", price: 5000 },
  { id: 6, name: "san pham 6", price: 6000 },
  { id: 7, name: "san pham 7", price: 7000 },
  { id: 8, name: "san pham 8", price: 8000 },
];

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems)
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {productArr.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0} - 
            <button onClick={() => dispatch(addItem(item.id))}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h1>Giỏ hàng</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - 
            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default App;
