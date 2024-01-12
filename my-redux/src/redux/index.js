import * as actionType from "../action/actionTypes"
const initalSate = {
    cartArr: []
}

export const cartReducer = (state = initalSate, action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            const productIndex = state.cartArr.findIndex(
                (p) => p.id === action.payload.id
            );
            if (productIndex === -1) {
                return {
                    cartArr: [...state.cartArr, { ...action.payload, quantity: 1 }]
                };
            } else {
                let newCart = [...state.cartArr];
                newCart[productIndex].quantity += 1;
                return { cartArr: newCart };
            }
        case actionType.DELETE_PRODUCT:
            const updatedCart = state.cartArr.filter(
                (item) => item.id !== action.payload.id
            );
            return { cartArr: updatedCart };
        default:
            break;
    }
}