import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contact_class'
import ComponenteB from './componenteB'

function componenteA({ contacto }) {
  return (
    <div>
    <h1>asdasd</h1>
      <h2>Nombre: { contacto.name }</h2>
      <h2>Apellido: { contacto.surname } </h2>
      <h3>Correo: { contacto.mail}</h3>
      <ComponenteB status={true} />
    </div>
  )
}

componenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default componenteA
