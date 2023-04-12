import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../pure/forms/contact_form';
import { Caract } from '../../models/contact_class';

const ContactComponent = () => {
    
    const contacto = new Caract('Francisco', 'Marchant', 'mail@mail.com', true)

    return (
        <div>
            <h1>Contacto:</h1>

            {/* Add contact */}
            <ContactForm caract={contacto}></ContactForm>
        </div>
    );
};


ContactComponent.propTypes = {

};


export default ContactComponent;
