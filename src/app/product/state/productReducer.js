import * as ActionTypes from "./action-types";

const INITIAL_STATE = {
    //for products list
    loading: false,
    error: null,
    products: [] 
}

export default
     function productReducer(state = INITIAL_STATE, action) {
        console.log("product reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.LOADING: {
                return Object.assign({}, state, {loading: action.payload.loading})
            }

            case ActionTypes.INIT_ERROR: {
                return Object.assign({}, state, {error: action.payload.error})
            }

            case ActionTypes.INIT_PRODUCTS: {
                return Object.assign({}, state, {products: action.payload.products})
            }
 
            default:
                return state;
        }

}