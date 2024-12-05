
import { useSelector } from "react-redux"


export default function Cart(){

    const {cart} = useSelector(state => state)      //destructuring the cartslice stae

    // console.log(cart);

    const cartValue = cart.reduce((acc,curr) => acc + curr.price,0)
    
    if(cart.length ===0) return <h2 className="min-h-[85vh] w-full bg-gray-900 text-gray-300 text-3xl pt-16 text-center">cart is empty!!!</h2>

    return <div className="min-h-[85vh] bg-gray-900 text-white p-8">
        <div className="cart-top flex justify-around items-center">
        <span className="text-5xl text-center">Cart</span>
            <div className="flex gap-8">
            <span className="flex justify-center items-end gap-2 text-gray-300">Cart Items <span className="text-3xl text-white">{cart.length}</span></span>
            <span className="flex justify-center items-end gap-2 text-gray-300">Cart Value <span className="text-3xl text-white">${cartValue}</span></span>
            </div>
        </div>

        <div className="flex gap-8 m-8 flex-wrap justify-center">
        {
        cart.map((item,index) => (
            <div key={index} className="h-72 w-60 bg-gray-950 rounded-xl overflow-hidden border border-gray-600">
                <div className="img h-1/2 w-full bg-white"><img src={item.image} alt="" className="h-full w-full object-contain"/></div>
                <h2 className=" py-2 px-4 text-base text-gray-100 font-semibold truncate">{item.title}</h2>
                <p className=" w-full text-gray-300 text-xs line-clamp-2 px-4">{item.description}</p>
                <div className="flex justify-around items-center mt-4">
                <span className="text-xl">${item.price}</span>
                <button 
                className="border bg-blue-950 border-gray-500 rounded-lg px-2 py-1 hover:border-gray-300"
                >Buy now</button>
                </div>
            </div>
        ))
        }
        </div>
    </div>
}