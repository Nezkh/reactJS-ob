import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervalID = setInterval(() => {
            document.tittle = `${new Date()}`
            console.log('Actualización del componete')
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer')
            document.tittle ="Tiempo detenido"
            clearInterval(intervalID)
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;