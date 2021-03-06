import React, {Component} from 'react';

import store from "../store";

export default class Home extends Component {
    constructor(props) {
        super(props);
 

        //ES5 bind, create function once per comp inst
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log('incr called');

        // action creators , actions.js
        function incrementAction(value) {
            return {
                type: 'INCREMENT',
                payload: {
                    value
                }
            }
        }

        let action = incrementAction(1)

        // calls reducer
        store.dispatch(action);

        

         
    }

    // with es5, bind, create one function per component inst
    decrement() {
        console.log('decr called');
       
    }

    // Create single function using ES.NEXT
    step2 = () => {
        console.log('step2 called');
         
    }

    componentDidMount() {
        console.log("Home mount")

        this.unsubsribeFn = store.subscribe(() => {
            console.log("Home Subsribe ", Math.random());
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        console.log("Home will unmount");
        this.unsubsribeFn();
    }

    render() {
        console.log("Home render ");
        return (
            <div>
                <p>Counter {store.getState().counter}</p>
                
                <button onClick={() => this.increment()}>
                  +1
                </button>

                <button onClick={this.decrement}>
                  -1
                </button>

                 <button onClick={this.step2}>
                  +2
                </button>

            </div>
        )
    }
}