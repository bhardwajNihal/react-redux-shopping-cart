import { Link } from "react-router-dom"

export default function Navbar(){


    return <div className="bg-gray-900 text-white h-[15vh] border-b border-gray-700 w-full flex justify-between items-center px-8">
        <div className="logo text-3xl font-bold">Shopify</div>
        <div className="options flex gap-8 text-gray-300 text-lg">
            <div className="home">
                <Link to={"/home"}>Home</Link>    
            </div>
            <div className="cart">
                <Link to={"/cart"}>Cart</Link>
            </div>
        </div> 
    </div>
}