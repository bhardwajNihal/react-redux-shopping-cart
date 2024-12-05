import { useEffect, useState } from "react";
import ProductCard from "../../components/Product-cart";
import { Circles } from "react-loader-spinner";

export default function Home(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    async function fetchProducts() {

        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        
        if(data){
            setProducts(data);
            setLoading(false);
        }
        
    }

    useEffect(()=> {
        fetchProducts()
    },[])

    // useEffect(()=>{
        
    //     console.log(products);
    // },[products])

    if(loading) return <div className="loader h-[85vh] w-full bg-gray-900 flex flex-col justify-center items-center">
        <Circles
        height={'40'}
        width={'40'}
        color="white"
        visible={true}/>
    </div>

    return <div className="min-h-[85vh] bg-gray-900 text-white p-8">
        <h2 className="text-2xl font-medium text-center">Products</h2>

        <div className=" mt-16 products flex flex-wrap gap-8 justify-center items-center" >
        {
            products.map((product,index) => {
                return <div key={index}>
                    <ProductCard product={product} />
                </div>
            })
        }
        </div>


    </div>
}