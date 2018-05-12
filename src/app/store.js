import {createStore, 
        combineReducers, 
        applyMiddleware} from 'redux';

import cartReducer from './redux-cart/state/cartReducer';        

const INITIAL_STATE = 100;

function counterReducer(state = INITIAL_STATE, action) {
   console.log("Counter Reducer ", state, action);

   switch(action.type) {
       case 'INCREMENT' :
            return state + action.payload.value

        default:
            return state;
   }   
}

// calls reducer to initialize default
// const store = createStore(counterReducer); 
// single reduer, getState() == 100

// combine reducers
let rootReducer = combineReducers({
    //stateName: reducerFn
    counter: counterReducer,
     items: cartReducer
})

function loggerMiddleware(store) {
    return function(nextFn) {
        // dispatch(action)
        return function (action) {
            // forward action to next middleare
            // forward to reducer
            console.log(" Logger Action ", action);
            // PRE Reducer code
            let result = nextFn(action);
            // after nextFn, reducers, next available middlewares executed
            // POST Reducer code
            if (action.type.indexOf('INCREMENT') >= 0) {
                let state = store.getState();
                localStorage.setItem("Counter", state.counter)
            }


            return result; 
        }
    }
}


const store = createStore(rootReducer, 
                            applyMiddleware(loggerMiddleware));
// store.getState() => { counter: 100 }

export default store;

// demo
console.log("STATE ", store.getState());


