
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Header from "../components/Header";
 
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       increment: function() {
           dispatch({type: 'INCREMENT', payload: {value: 1}})
       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Header)