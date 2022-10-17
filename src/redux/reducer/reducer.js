const initialState = {
    cartData: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload],

            }
        case "REMOVE_TO_CART":

            const newData = state.cartData.filter((data) =>
           data.id!== action.id
                )
            return {
                ...state,
                cartData: newData
            }

        default: return state
    }
}