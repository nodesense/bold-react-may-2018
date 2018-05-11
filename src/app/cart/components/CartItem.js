// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            qty: props.item.qty
        }
    }

    onQtyChange = (e) => {
        //e represent event object
        // let target = e.target; // real dom (input)
        let {value} = e.target;
        console.log(value);

        this.setState({
            qty: value
        })
    }

    updateQty =  () => {
        this.props.updateItem(this.props.item.id, this.state.qty);
    }

    componentDidMount() {
        console.log("Item mount ", this.props.item.id);
        this.input.focus();
    }

    componentWillUnmount() {
        console.log("Item unmount ", this.props.item.id);
    }
 
    
    // update cycle
    componentDidUpdate() {
        console.log("item did update")
        //this.input.focus();
    }
    
    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     <input value={this.state.qty}
                            onChange={this.onQtyChange}
                            onBlur={this.updateQty}

                            ref={ (elem) => this.input = elem}
                             
                     />
                </td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => this.props.removeItem(item.id)}>
                        Delete
                </button>


                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
   
    item : PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired
    }).isRequired,

    removeItem: PropTypes.func.isRequired
}



