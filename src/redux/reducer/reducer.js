const initialState = {
    cartData: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const itemIndex = state.cartData.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartData[itemIndex].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 }

                return {
                    ...state,
                    cartData: [...state.cartData,temp],

                }
            } break;

        case "REMOVE_TO_CART":

            const newData = state.cartData.filter((data) =>
                data.id !== action.id
            )
            return {
                ...state,
                cartData: newData
            }

        default: return state
    }
}