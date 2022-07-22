import { AddToCart } from "./CartConstant";

const initialState={
    numOfCartProduct: 0,
}
export const CartReducer = (state=initialState, action) => {
    switch(action.type){
        case AddToCart:
            return{
                ...state,
                numOfCartProduct: state.numOfCartProduct+1
            }
        default : return state ;
    }
}
