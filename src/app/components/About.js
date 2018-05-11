import React, {Component} from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            members: ['Member 1', 'Member 2'],
            show: true,
            counter: 0
        }
    }

    toggle = (e) => {
        console.log("Click ", e);
        //console.trace();
        // set State is async
        // calls render method after merge state
        //Good API

        console.log("before ", this.state.show);
        this.setState({
            show: !this.state.show
        });

        this.setState({
            counter : this.state.counter + 1
        }, () => {
          console.log("Counter setState callback");   
        })

        console.log("after ", this.state.show);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("current state", this.state);
        console.log("next State ", nextState);

        return this.state.show != nextState.show; // calls render method
    }
     
    
    render() {
        console.log("About render  ", this.state.show);
        return (
            <div> 
            <h2>About</h2>
             {/* comment */}

            <div onClick={this.toggle}>
                <button onClick={this.toggle}>
                    {this.state.show? "Hide": "Show"}
                </button>    
            </div>

            {
             this.state.show &&    
             <ul>
                  {
                      this.state.members
                          .map ( name => (
                              <li key={name}> {name}</li>
                          ))
                  }  
             </ul>   
            }

            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}