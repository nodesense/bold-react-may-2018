
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        console.log("Not found ", props);
        return (
            <div> 
            <h2>Page Not Found</h2>
            <p> Url {props.match.url} </p>

            <button onClick={() => props.history.push("/")}>
                Home
            </button>

            </div>
        )
} 


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}