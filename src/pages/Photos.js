import React, {useContext} from "react"
import Images from "../components/Images"
import {Context} from "../ContextProvider"
import size from "../utils/index"

function Photos(){
    const {images} = useContext(Context)
    
    const image_elements = images.map((img, index)=> (
        <Images key={img.id} img={img} className={size(index)}/>
    ))

    return (
        <div className="photos">
            {image_elements}
        </div>
    )
}

export default Photos