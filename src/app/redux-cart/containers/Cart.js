// containers/Cart.js

// take state from redux, pass to react as props
// dispatch to store on behalf of componetn
// subscribe, unsubscribe

// container component/smart component

import {connect} from 'react-redux';
import * as actions from '../state/actions';

import {bindActionCreators} from 'redux';

// Presentational component
import Cart from "../components/Cart";

// called by container component
// when: on subscribe, init component
// state = store.getState() {counter: 0, items: []}
export function mapStateToProps (state) {
    console.log("Cart container map state ", state);
    return {
        // prop Name: value
        cartLength: state.items.length
    }
}

// called by container component
// when: on every component instance creation
export function mapDispatchToProps(dispatch) {
    console.log("Cart map dispatch ");

    return {
        //propName: function() {}
        addItem: function () {
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            let action = actions.addItem(item); 
            dispatch(action);
        },

        // empty: function () {
        //      let action = actions.empty();
        //     dispatch(action)
        // }

        // props.empty
        empty: bindActionCreators(actions.empty, dispatch),

        //props.actions.empty
        // {empty: fun(), addItem: fun()}
        actions: bindActionCreators(actions, dispatch)
    }
}


// store, mapStateToPRops mapDispatchToProps, Presnetation component
// store is passed as context, by Provider component
// decorator

let connectFn = connect(mapStateToProps, mapDispatchToProps);

// Pure component, 
let CartContainer = connectFn(Cart);

export default CartContainer;




