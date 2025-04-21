import "./checkout.css"


function CheckoutProduct(props){

    return(
        <div className="card-checkout">
            <img src={props.image} alt={props.title} />
            <div>
            <h4>{props.title}</h4>
            <p>{props.category}</p>
            <p>{props.price}$</p>
            </div>
        </div>
    )
}

export default CheckoutProduct