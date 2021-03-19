import React, {useContext, useState} from "react"
import CartArr from "../components/CartArr"
import {Context} from "../ContextProvider"
function Cart(props) {
    const {cartItems, emptyCart} = useContext(Context)
    const cart = cartItems.map(item => (
        <CartArr key={item.id} item={item} />
    ))

    const [check, setCheck] = useState('Checkout')

    function onClick() {
        setCheck("Ordering...")
        setTimeout(()=>{
            setCheck("Checkout")
            emptyCart()
        }, 3000)
    }
    return (
        <div >
            <h2 className="cart-title">My Cart ({cartItems.length})</h2>
            
            <div className="cartflex">
                {cart}
            </div>
            <h2 className="cart-total">Total:   ${cartItems.length * 5.99}</h2>
            <button onClick={() => {cartItems.length > 0 && onClick()}} 
            className={`cart-btn ${cartItems.length <= 0 && "disabled"}`}>{check}</button>
        </div>
        
    )
}

export default Cart