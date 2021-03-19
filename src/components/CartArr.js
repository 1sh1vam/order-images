import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import useHoverHook from "../customhooks/Hooks"

function CartArr({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHoverHook()
    return (
        <div className="cart-det">
            <div className="cart-container">
                <i onClick={()=>removeFromCart(item)}
                    ref={ref}
                    className={hovered ? "ri-delete-bin-7-fill":"ri-delete-bin-7-line"}
                >
                </i>
                <img src={item.url} />
            </div>
            <div className="cart-price">
                <h3>$5.99</h3>
            </div>
        </div>
        
    )
}

export default CartArr