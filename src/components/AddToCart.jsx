import { useContext } from "react";
import { Kart } from "../App";

function AddToCart({item}) {
  
  const [cart, setCart] = useContext(Kart)

  const addCart = (product) => {
    setCart([...cart, product])
  }

  return (
    
    <div className={`m-3 text-center ${cart.find(i => i === item) ? 'bg-gray-500' : ''}`}>
      <img src={item.img} alt={item.name} className="" />
      <h2 className="font-bold text-lg m-2 ">{item.name}</h2>
      <p className="m-3 justify-center">Price: {item.price} $</p>
      <button className="ring-4 ring-orange-500 bg-gray-300 rounded-lg " onClick={() => addCart(item)}>Add to Cart</button>
      <p>
      {cart.find(i => i === item) ? 'Added' : ''}
      </p>
    </div>
    
    
  )
}

export default AddToCart;
