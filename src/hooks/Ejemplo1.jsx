// Ejemplo de uso del Hook usaState
// Crear un componente de tipo función y acceder a su estado privado a traves de un hook y, además, poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Francisco',
        email: 'test@test.com'
    }

    // Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente, para así poder gestionar su cambio y que este se vea reflejado en la vista del componente.

    // const [nombreVariable, funcionParaCambiar] = useState(valorInicial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    // Función para actualizar el estado privado que contiente el contador

    function incremetarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }


    // Función para actualizar el estado de persona en el componente
    function actualizarPersona(nombre){
        setPersona(
            {
                nombre: 'Carolina', 
                email: 'carolina@test.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>Nombre: {  persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>
            {/* bloque de botones para actualizar el estado */}
            <button onClick={incremetarContador} >Incremetar Contador</button>
            <button onClick={actualizarPersona} >Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
