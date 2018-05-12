import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);

        //keyword, state, mutable
        this.state = {
            counter: 0
        }

        //ES5 bind, create function once per comp inst
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log('incr called');
        // BAD, mutating state directly, sync 
        this.state.counter++;

        // BAD, trigger render to called
        this.forceUpdate();
    }

    // with es5, bind, create one function per component inst
    decrement() {
        console.log('decr called');
        // BAD, mutating state directly, sync 
        this.state.counter--;

        // BAD, trigger render to called
        this.forceUpdate();
    }

    // Create single function using ES.NEXT
    step2 = () => {
        console.log('step2 called');
        // BAD, mutating state directly, sync 
        this.state.counter += 2;

        // BAD, trigger render to called
        this.forceUpdate();
    }

    componentDidMount() {
        console.log("Home mount")
    }

    componentWillUnmount() {
        console.log("Home will unmount");
    }

    render() {
        console.log("Home render ");
        return (
            <div>
                <p>Counter {this.state.counter}</p>
                
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