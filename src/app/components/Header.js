import React, {Component} from 'react';

import PropTypes from 'prop-types';

export default class Header extends Component {
    constructor(props) {
        super(props); //MUST
        console.log("Header created ", );
    }

    // ES.NEXT babel stage-2
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }

}