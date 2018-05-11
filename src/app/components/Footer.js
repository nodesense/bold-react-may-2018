import React from 'react';

import PropTypes from 'prop-types';

// functional component, with deconstruct
export default function Footer({company, year}) {
    // props are immutable
    // error
    // props.company = 'Test App';

    // deconstruct
    // let {company,
    //      year } = props;

    return (
        <div>
            <hr />
            <p>Copyrights@ {company}, {year}  </p>
        </div>
    )
}

//keywords
Footer.propTypes = {
    // optional
    company: PropTypes.string, 
    // mandatory
    year: PropTypes.number.isRequired
}

//keyword
Footer.defaultProps = {
    company: 'Product App'
}

