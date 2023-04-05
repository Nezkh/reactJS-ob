import React from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    return (
        <div>
                <h1>
                    ¡Hola! { props.name } desde componente funcional
                </h1>
                {/* <h2>
                    Tu edad es de: { this.state.age }
                </h2> */}
                {/* <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div> */}
            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
