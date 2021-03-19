import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../ContextProvider"

function Header(props) {
    const {cartItems, favItems} = useContext(Context)
    return (
        <div className="header">
            <Link to="/"><h2>Pic Some</h2></Link>
            <div className="cart_fav">
                <Link to="/favourite">
                    {favItems.length > 0? <i class="ri-heart-fill"></i> :
                     <i class="ri-heart-line"></i>}
                </Link>
                <Link to="/cart">
                    {cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>:
                    <i className="ri-shopping-cart-line ri-fw ri-2x"></i>}
                </Link>
            </div>
            
        </div>
        
    )
}

export default Header