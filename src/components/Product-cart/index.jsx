
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slice/cartSlice"




export default function ProductCard({product}){

    const {cart} = useSelector(state => state)
    const dispatch = useDispatch()

    const isPresent = cart.some((item) => item.id === product.id)

    function handleAddToCart(){
        dispatch(addToCart(product))
    }

    function handleRemoveFromCart(){
        dispatch(removeFromCart(product))
    }



return <div className="h-72 w-60 bg-gray-950 rounded-xl overflow-hidden border border-gray-600">
        <div className="img h-1/2 w-full bg-white"><img src={product.image} alt="" className="h-full w-full object-contain"/></div>
        <h2 className=" py-2 px-4 text-base text-gray-100 font-semibold truncate">{product.title}</h2>
        <p className=" w-full text-gray-300 text-xs line-clamp-2 px-4">{product.description}</p>
        <div className="flex justify-around items-center mt-4">
        <span className="text-xl">${product.price}</span>
        <button 
        className="border bg-blue-950 border-gray-500 rounded-lg px-2 py-1 hover:border-gray-300"
        onClick={isPresent ? handleRemoveFromCart : handleAddToCart}
        >{(isPresent) ? "Remove from Cart": "Add to Cart"}</button>
        </div>
    </div>
}   