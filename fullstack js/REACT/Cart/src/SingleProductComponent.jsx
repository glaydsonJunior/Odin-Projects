import "./product.css"
import React from "react"

function ProductComponent(props){

    function getProductInfo(props){
        return {title: props.title, price: props.price, description: props.description, category: props.category, image: props.image}
    }

    function addActualProduct(){
        const temp = props.cart
        temp.push(getProductInfo(props))
        props.addProduct(temp)
    }

    return(
        <div className="card">
            <h4>{props.title}</h4>
            <p>{props.category}</p>
            <p>{props.price}$</p>
            <img src={props.image} alt={props.title} />
            <button onClick={addActualProduct}>ADD TO CART</button>
        </div>
    )
}

export default ProductComponent