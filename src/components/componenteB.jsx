import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ComponenteB(estado) {
    const [conectado, setConectado] = useState(estado)

  return (
    <div>
        <h3> { conectado === false ? 'Contacto No Disponible' : 'Contacto En Línea' }</h3>
        <button onClick={() => setConectado(!conectado)}> { conectado === false ? 'Conectar' : 'Desconectar' } </button>
    </div>
  )
}

ComponenteB.propTypes = {
    estado: PropTypes.bool,
}

export default ComponenteB
