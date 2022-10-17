export const AddToCart = (item) =>{
    return{

        type:"ADD_TO_CART",
        payload: item,
        id: item.id
    }
}

export const RemoveToCart = (data) =>{
    console.log(data)
    return{
        type:"REMOVE_TO_CART",
        id:data.id
        // payload: data,
        // data
    }
}