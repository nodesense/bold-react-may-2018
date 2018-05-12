
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";

import * as cartActions from "../../redux-cart/state/actions";


const mapStateToProps = (state) => {
    return {
         products: state.product.products,
         loading: state.product.loading,
         error: state.product.error,

         counter: state.counter,
         cartLength: state.items.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),

        addItemToCart: function(product) {
            //TODO
            let item = {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: 1
            }

            dispatch(cartActions.addItem(item));

        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)