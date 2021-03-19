import React, {useState, createContext, useEffect} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [images, setImages] = useState([])
    const [favItems, setFavItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => setImages(response))
            .catch(err => console.error(err))
    }, [])

    function addToFavourite(img) {
        setFavItems(fav => [...fav, img])
    }

    function removeFromFavourite(img) {
        setFavItems(fav => fav.filter(obj => obj.id!==img.id))
    }

    // function emptyFavourite() {
    //     setFavItems([])
    // }

    function addToCart(img) {
        setCartItems(fav => [...fav, img])
    }

    function removeFromCart(img) {
        setCartItems(fav => fav.filter(obj => obj.id!==img.id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{images, addToCart, addToFavourite, 
            removeFromCart, removeFromFavourite, cartItems, favItems, emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}