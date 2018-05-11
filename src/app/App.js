import React, {Component} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";

import Cart from './cart/components/Cart';

export class App extends Component {

    // keyword, create and return virtual dom
    render() {
        return (
            <div>
                <h2>React App 16</h2>
                <Header title="Product app" />
            
                <Cart />

                <Home />

                <About />

                <Footer company="Product App 2" year={2018}  />
            </div>
        )
    }
}