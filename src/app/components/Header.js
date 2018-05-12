import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {NavLink, Link, withRouter} from 'react-router-dom';

 
 class Header extends Component {
    constructor(props) {
        super(props); //MUST
        console.log("Header created ", );
    }

    // ES.NEXT babel stage-2
    static propTypes = {
        title: PropTypes.string
    }

    componentDidMount() {
    
    }



    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

    
                <NavLink to="/" exact className="button"
                                activeClassName="success"> 
                                Home 
                </NavLink>

                <NavLink to="/products" className="button"
                                activeClassName="success"> 
                                Products 
                </NavLink>

                <NavLink to="/cart" className="button"
                                activeClassName="success"> 
                                Cart 
                </NavLink>

                 <NavLink to="/redux-cart" className="button"
                                activeClassName="success"> 
                                Redux Cart 
                </NavLink>

                
                <NavLink to="/about" className="button"
                                activeClassName="success"> 
                                About 
                </NavLink>

                <button onClick={() => this.props.increment()}>
                  +1
                </button>

            </div>
        )
    }

}

export default withRouter(Header)