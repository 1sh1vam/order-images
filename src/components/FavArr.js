import React, {useContext} from "react"
import {Context } from "../ContextProvider"
import useHoverHook from "../customhooks/Hooks"

function FavArr({item}) {
    const [hovered, ref] = useHoverHook()
    const {removeFromFavourite} = useContext(Context)
    return (
        <div className="fav">
            <i onClick={()=>removeFromFavourite(item)}
                        ref={ref}
                        className={hovered ? "ri-close-circle-fill":"ri-close-circle-line"}></i>
            <img src={item.url} />
        </div>
    )
}

export default FavArr