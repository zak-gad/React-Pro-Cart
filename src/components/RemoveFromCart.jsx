import { useContext } from "react";
import { Kart } from "../App";

function RemoveFromCart({item}) {
  
  const [cart, setCart] = useContext(Kart)

  const removeCart = (product) => {

    setCart([...cart.filter(item => item !== product)])
  }

  return (
    <div className="m-4">
      <img src={item.img} alt={item.name} className="w-44" />
      <h3>{item.name}</h3>
      <p>Price: {item.price} $</p>
      <button 
            className="btn ring-4 ring-orange-500 bg-gray-300 rounded-lg"
            onClick={() => removeCart(item)}
      >Remove from the Cart</button>
    </div>
  )
}

export default RemoveFromCart;
