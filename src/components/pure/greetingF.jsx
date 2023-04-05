import React from 'react';
import PropTypes from 'prop-types';


const GreetingF = () => {
    return (
        <div>
                <h1>
                    ¡Hola! { this.props.name }
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;
