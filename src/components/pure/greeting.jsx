import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props)
        this.state = {
            age : 29
        }
    }
    render() {
        return (
            <div>
                <h1>
                    ¡Hola! { this.props.name }
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                
            </div>
        );
    }
}


Greeting.propTypes = {

};


export default Greeting;
