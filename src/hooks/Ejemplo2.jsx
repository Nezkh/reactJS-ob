/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * -useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // Cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();
    
    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     * Trabajamos con useEffect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando Referencia a Elemento del DOM');
    //     console.log(miRef);
    // });

    /**
     * ? Caso 2: Ejecuta SOLO cuando cambie el CONTADOR 1
     * Cada vez que haya un cambio en contadro 1, se ejecuta lo que diga el useEffect, en caso de que cambie contador 2,no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
    //     console.log('Mostrando Referencia a Elemento del DOM');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecuta SOLO cuando cambie el CONTADOR 1 o CONTADOR 2
     * Cada vez que haya un cambio en contadro 1 o 2, se ejecuta lo que diga el useEffect,
    */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2');
        console.log('Mostrando Referencia a Elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);


return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/* Botones para cambiar los contadores */}
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2} >Incremetar contador 2</button>
        </div>
    );
}

export default Ejemplo2;
