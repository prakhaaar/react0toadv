


//create a cart component
// subscribe to store and get the cart items
//create a functions to  empty the cart dipatch action;
import React from "react";
import useDispatch from "react-redux";   
import { useSelector } from "react-redux";
import { emptyCart,addItem } from "../utils/cartSlice";
import ItemList from "./ItemList";


const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleEmptyCart=()=>{
        dispatch(emptyCart);
    }
    return(
        <div className="text center p-3 m-3">
            <div className="text-2xl font-bold ">Welcome to ur Cart</div>
            <div className="w-6/12 m-auto">
            <button
            className="p-2 m-2 bg-black text-white rounded-2xl"
            onClick={handleEmptyCart}
            >
            Clear Cart
            </button>
            {cartItems.length===0&(
                <h1>Cart is empty</h1>
            )}
            <ItemList items={cartItems}/>
            </div>
        </div>  
    )}