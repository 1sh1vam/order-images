function size(index) {
    if(index%5===0){
        return "big"
    }
    if(index%6===0){
        return "wide"
    }
}

export default size