
import React, {Component} from "react";
import PropTypes from "prop-types";

function ProductItem(props) {
  let {product, addItemToCart} = props;
     
   return (
            <li key={product.id}>
            <div>
                <span>{product.name}</span>
                <button onClick={ () => addItemToCart(product) }>
                +Cart
                </button>  
            </div>
        </li>
   ) 
}

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // dispatch function as a action
        this.props.actions.getProductsFromServer();
    }
    
    render() {
        let {products, loading} = this.props;
        //TODO: loading, error



        return (
            <div> 
            <h2>Product List</h2>

            {
                loading &&
                  <img src="/assets/loading.gif" />
            }

            { !loading && 
                <ul>
                    {
                        products.map (product => (
                            <ProductItem key={product.id}
                                        product={product}
                                        addItemToCart = {this.props.addItemToCart}

                            />
                        ))
                    }   
                </ul>
            }

            </div>
        )
    }
} 


ProductList.defaultProps = {
    products: []   
}

ProductList.propTypes = {
    
}