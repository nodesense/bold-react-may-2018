    // CartSummary.js
    import React, {PureComponent} from "react";
    import PropTypes from "prop-types";

    // PureComponent implements shouldcomponentupdate
    // compare nextProps with current Props
    // compare nextState with current state
    // shallow compare
    export default class CartSummary extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                discount: 0,
                grandTotal: 0
            }
        }

        componentWillMount() {
            this.recalculate(this.props);
        }


        // called when parent render called on update cycle
        componentWillReceiveProps(nextProps) {
            console.log("summary will receive");
            console.log("current props ", this.props);
            console.log("next props ", nextProps)

            this.recalculate(nextProps);
        }

        // called when parent render called on update cycle
        // called when current comp this.setState
        // NOT Called on this.forceUpdate
        // shouldComponentUpdate(nextProps, nextState) {
        //     console.log("summary should update")

        //     return nextProps.amount != this.props.amount ||
        //            nextProps.count != this.props.count ||
        //            nextState.discount != this.state.discount ||
        //            nextState.grandTotal != this.state.grandTotal;

        // }

        // since PureCompoent that implemnets shouldComponentUpdate


        
        
        recalculate(props) {
            let discount = 0;

            if (props.count >= 10) {
                discount = 20;
            } else if (props.count >= 5) {
                discount = 10;
            }

            let grandTotal = props.amount - (props.amount * discount / 100);

            this.setState({
                discount, 
                grandTotal
            })
        }
        


        
        render() {
            console.log("CartSummary Render");
            return (
                <div> 
                <h2>Cart Summary</h2>
                <p> Amount : {this.props.amount} </p>
                <p> Count : {this.props.count} </p>

                <p> Discount: {this.state.discount} %</p>
                <p> Grand Total: {this.state.grandTotal} </p>
                </div>
            )
        }
    } 


    CartSummary.defaultProps = {
        
    }

    CartSummary.propTypes = {
        
    }