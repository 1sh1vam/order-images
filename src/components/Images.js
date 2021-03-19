import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import useHoverHook from "../customhooks/Hooks"

function Images({img, className}) {
    const [hovered, ref] = useHoverHook()
    const {cartItems, favItems, removeFromCart, addToCart,
            addToFavourite, removeFromFavourite} = useContext(Context)

    function heart(){
        const alreadyInFav = favItems.some(item => item.id === img.id)
        if(alreadyInFav){
            return <i class="ri-heart-fill heart-img" onClick={()=>removeFromFavourite(img)}></i>
        } else {
            return hovered ? <i class="ri-heart-add-line" onClick={()=>addToFavourite(img)}></i> : ''
        }
    }

    function cart() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)

        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromCart(img)}></i>
        } else {
            return hovered ? <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i> : ''
        }
    }


    return (
        <div className={`image-container ${className}`}
            ref={ref}
        >
            <img src={img.url}/>
            <div className="heart-cart">
                {[heart(), cart()]}
            </div>
        </div>
    )
}

export default Images