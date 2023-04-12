import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto_class'
import ComponenteB from './componenteB'


function ComponenteA({ contacto }) {
  return (
    <div>
        <h2>Nombre: { contacto.nombre}</h2>
        <h2>Apellido: { contacto.apellido}</h2>
        <h3>mail: { contacto.mail } </h3>
        <ComponenteB></ComponenteB>
    </div>
  )
}

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteA
