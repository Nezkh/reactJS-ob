import React, { useState } from 'react';

// Definiendo estilos en constantes:

// ? Estilos para usuarios logueados
const loggedStyle = {
    color: 'white',
    fontWeight: 'bold'
}

// ? Estilos para usuarios no logueados
const unloggedStyle = {
    color: 'tomato',
}


const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false);
    
    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>Please Login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? greetingUser() : pleaseLogin() }

            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>

        </div>
    );
}

export default GreetingStyled;
