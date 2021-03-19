import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import FavArr from "../components/FavArr"


function Favourite(props) {
    const {favItems} = useContext(Context)

    const elements = favItems.map(item => (
        <FavArr key={item.id} item={item} />
    ))
    return (
        <div className="fav-items">
            {elements}
        </div>
    )
}

export default Favourite