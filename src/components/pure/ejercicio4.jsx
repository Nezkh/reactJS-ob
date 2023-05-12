import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Ejercicio4 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            intervalID: null,
        }
    }

    mouseContentEnter = () => {
        this.timer = setInterval(() => {
            this.setState((prevState) =>({
                count: prevState.count + 1,
            }));
        }, 1000);
        console.log('dentro del contenedor')
        
    }

    mouseContentLeave = () =>{
        clearInterval(this.timer);
        console.log('Saliendo del contenedor')
    }

    render() {
        const { count } = this.state
        return (
            <div style={{height:'255px', width:'255px', backgroundColor:'black'}} onMouseEnter={this.mouseContentEnter} onMouseLeave={this.mouseContentLeave}>
                <p style={{color: 'white'}}>Contador: { count} </p>
            </div>
        );
    }
}


Ejercicio4.propTypes = {

};


export default Ejercicio4;
