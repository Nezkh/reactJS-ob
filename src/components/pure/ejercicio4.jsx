import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Ejercicio4 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
            intervalID: null,
        }
    }

    mouseContentEnter = () => {
        this.timer = setInterval(() => {
            this.setState((prevState) =>({
                red: Math.floor(Math.random() * 256),
                green: Math.floor(Math.random() * 256),
                blue: Math.floor(Math.random() * 256),
            }));
        }, 1000);
    }

    mouseContentLeave = () =>{
        clearInterval(this.timer);
    }

    stopColorChange = (event) => {
        event.preventDefault();
        clearInterval(this.timer);
      }

    render() {
        const { red, green, blue } = this.state
        return (
            <div style={{height:'255px', width:'255px', backgroundColor: `rgb(${red},${green},${blue})`}} onMouseEnter={this.mouseContentEnter} onMouseLeave={this.mouseContentLeave} onDoubleClick={ this.stopColorChange }>
            </div>
        );
    }
}


Ejercicio4.propTypes = {

};


export default Ejercicio4;
