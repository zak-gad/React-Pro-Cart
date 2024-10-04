import AddToCart from "./AddToCart"
import products from './products.js'

export default function Home() {
    return (
        <div className="container  mx-auto justify-center my-20">
            <div className="flex flex-grow justify-center">
                {products.map(i => <AddToCart item={i} key={i}/>)}
            </div>
        </div>
    )
}