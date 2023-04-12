import React from 'react';
import PropTypes from 'prop-types';
import { Caract } from '../../../models/contact_class';

const ContactForm = ( { caract }) => {
    return (
        <div>
            <h2>
               { caract.connected ? 'Conectado En Línea':'Contacto No Disponible' }
            </h2>
            <h3>
                Nombre: { caract.name}
                <br></br>
                Apellido: { caract.surname }
            </h3>
            <h3>
                Correo: { caract.mail }
            </h3>
        </div>
    );
};


ContactForm.propTypes = {
    caracteristica: PropTypes.instanceOf(Caract)
};


export default ContactForm;
