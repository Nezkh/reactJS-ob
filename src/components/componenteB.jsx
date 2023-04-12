import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ComponenteB(status) {
  const [connected, setConnected] = useState(status);
  return (
    <div>
      <h3> {connected === false ? 'Conectaco no disponible' : 'Contacto en línea'} </h3>
      <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectado' : 'Desconectado'}</button>
    </div>
  )
}

ComponenteB.propTypes = {
  estado: PropTypes.bool,
}

export default ComponenteB
