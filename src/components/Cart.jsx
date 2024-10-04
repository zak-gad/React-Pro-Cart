import { useContext } from "react";
import { Kart } from "../App";
import RemoveFromCart from './RemoveFromCart'

export default function Cart() {

    const [cart, setCart] = useContext(Kart)

    return (
        <>
            <h1>Cart</h1>
            <p>Total Price: {
                // cart array will collapse into a value with array reduce function
            cart.reduce((total, item) => total += item.price, 0)
            }</p>
            {cart.map(i => <RemoveFromCart item={i} key={i}/>)}
        </>
    )
}