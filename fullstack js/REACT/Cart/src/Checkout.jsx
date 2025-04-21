import CheckoutProduct from "./CheckoutProduct"



function Checkout({cart}){
    return(
        <div>
            {cart.map(i=>{
                return <CheckoutProduct key={i.id} title={i.title} category={i.category} description={i.description} image={i.image} price={i.price} />
            })}
        </div>
    )
}

export default Checkout