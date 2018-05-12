import * as ActionTypes from "./action-types";
 
import * as api from "./api";

export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

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


// handling ajax/async in Redux
// thunk as middleware
// as per thunk design, 
// return function as an action
export function getProductsFromServer() {

    console.log("get products action creator");

    //dispatch and getState passed by thunk
    return function (dispatch, getState) {
        // all async/ajax code here
        console.log("called by thunk ");

        // Cache the data
        let state = getState();
        if (state.product.products.length > 0) {
            console.log("Data Already cached, no api calls");
            return;
        }

        dispatch(loading(true));

        //clean old data
       //dispatch(initProducts([]));

        api.getProducts()
           .then ( products => {
               console.log("Got products ", products);
               
               // Initialize products in store
               dispatch(initProducts(products));
               
               dispatch(loading(false));

           })

    }

    
}