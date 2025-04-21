import { useState, useEffect } from "react"
import ProductComponent from "./SingleProductComponent"



function ProductsComponent({cart, addProduct}){
    const [products, setProducts] = useState([])

    function getProducts(){
        fetch(`https://fakestoreapi.com/products/`).then((response)=>{return response.json()}).then(jason=>{setProducts(jason)})
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <>
        <div className="grid-container">
            {products.map((i)=>{
                return <ProductComponent key={i.id} title={i.title} category={i.category} description={i.description} image={i.image} price={i.price} addProduct={addProduct} cart={cart}/>
            })}
        </div>
        </>
    )
}


export default ProductsComponent