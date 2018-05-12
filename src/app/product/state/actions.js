import * as ActionTypes from "./action-types";
 
import * as api from "./api";

// returns object
export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

// returs action object
export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}

// should return action, as an object
export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}


export function getProducts() {
    return function (dispatch, getState) {
        console.log("Called by thunk");

        dispatch(loading(true));

        api.getProducts()
        .then ( products => {
            let action = initProducts(products);
            dispatch(action);

            dispatch(loading(false));
        })

    }
}

