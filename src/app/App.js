import React, {Component} from 'react';

import Header from './containers/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

import Cart from './cart/components/Cart';

import ReduxCart from "./redux-cart/containers/Cart";


import { BrowserRouter as Router, 
         Route, 
         Switch } from 'react-router-dom';

export class App extends Component {

    // keyword, create and return virtual dom
    render() {

        let componentMap = [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/about",
                exact: false,
                component: About
            },
        ]

        return (
            <Router>
            <div>
                <h2>React App 16</h2>
                <Header title="Product app" />

                {/* <Switch>
                     {
                          componentMap.map ( comp => (
                             <Route {...comp} />
                         ))
                      }
                  </Switch>
                    */}
                    
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/redux-cart" component={ReduxCart} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
               </Switch>   

                <Footer company="Product App 2" year={2018}  >
                    <p>Contact time: 9:00 to 5:00 PM</p>
                    <p>Phone: 123-456-7890</p>
                </Footer>
            </div>
            </Router>
        )
    }
}