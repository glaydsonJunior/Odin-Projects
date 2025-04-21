import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import ProductsComponent from "./ProductsComponent";
import Checkout from "./Checkout";
import "./app.css"
import Home from "./Home";

const Layout = () => {
    return (
        <div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/checkout">Checkout</Link>
            </div>
            <Outlet />
        </div>
    );
};

function App() {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        
    })

    function addProduct(prod){
        setCart([...prod])
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: "shop",
                    element: <ProductsComponent cart={cart} addProduct={addProduct} />,
                },
                {
                    path: "checkout",
                    element: <Checkout cart={cart} />,
                },
            ],
        },
    ]);

    return(
        <>
        <div className="navbar">{cart.length > 0 ? <p>{cart.length} items in cart</p> : <p>No Items!</p>}</div>
        <RouterProvider router={router} />
        </>
    )
}

export default App;