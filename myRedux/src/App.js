import { useSelector, useDispatch } from 'react-redux'
import { addProduct, deleteProduct } from './redux/slice/cartSilec'

function App() {

  const dispatch = useDispatch()
  const CartProducts = useSelector(state => state.cart.CartArr)

  console.log(CartProducts) 

  const productArr = [
    { id: 1, name: "san pham 1", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 1000 },
    { id: 2, name: "san pham 2", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 2000 },
    { id: 3, name: "san pham 3", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 3000 },
    { id: 4, name: "san pham 4", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 4000 },
    { id: 5, name: "san pham 5", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 5000 },
    { id: 6, name: "san pham 6", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 6000 },
    { id: 7, name: "san pham 7", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 7000 },
    { id: 8, name: "san pham 8", img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 8000 },
  ];

  return (
    <div className="pt-16">
    <div className="absolute w-auto h-auto p-3 bg-yellow-300 rounded-full right-6">{CartProducts.length}</div>
      <div className="grid grid-cols-4 gap-20 px-16 ">
        {productArr.map((item) => (
          <div className='w-full rounded-lg shadow-xl border-spacing-0' key={item.id}>
            <img className='w-full rounded-t-lg h-52' src={item.img} alt="" />
            <div className="text-center rounded-b-lg bg-slate-100">
              <h3 className='text-xl font-bold'>{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
              <button className="p-2 mb-3 bg-teal-400 border rounded" onClick={() => dispatch(addProduct(item))}>BUY</button>
            </div>
          </div>
        ))}
      </div>
    {/* <h3>Gio hang</h3> */}
    <div className="grid grid-cols-4 gap-20 px-16 ">
        {CartProducts.map((item) => (
          <div className='w-full rounded-lg shadow-xl' key={item.id}>
            <img className='w-full rounded-t-lg h-52' src={item.img} alt="" />
            <div className="text-center">
              <h3 className='text-xl font-bold'>{item.name}</h3>
              <p className="font-bold text-red-400">{item.price}</p>
              <p className="font-bold text-green-600">{`So luong: ${item.quantity}`}</p>
              <button className="p-2 mb-3 bg-teal-400 border rounded" onClick={() => dispatch(deleteProduct(item))}>XOA</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
