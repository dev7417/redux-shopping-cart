const initialState = {
    cartData: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state, action.payload]
            }
        default: return state
    }
}