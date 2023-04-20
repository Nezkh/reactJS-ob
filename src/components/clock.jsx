import React, { useState, useEffect } from 'react';

const Clock = () => {

    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Francisco',
        apellido: 'Marchant',
    }

    const [user, setUser] = useState(defaultState);

    useEffect(() => {
        const timer = setInterval(() => {
            setUser(prevUser => {
                return {
                    ...prevUser,
                    fecha: new Date(),
                    edad: prevUser.edad + 1.
                }
            });
        }, 1000)
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div>
            <h1>
                Bienvenido { user.nombre } { user.apellido }!
            </h1>
            <h2>Edad: { user.edad }</h2>
            <h2>
                La Hora Actual es: { user.fecha.toLocaleTimeString() }
            </h2>
        </div>
    );
}

export default Clock;
