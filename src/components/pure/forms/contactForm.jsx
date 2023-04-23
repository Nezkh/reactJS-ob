import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact-class';


const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');
    const connectionRef = useRef(false);

    function addContact(e){
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            connectionRef.current.value === 'true'
        );
        add(newContact);
    }
    
    return (
        <div>
            <hr></hr>
            <form onSubmit={addContact}>
                <div>
                    <input ref={nameRef} id='inputName' type='text' placeholder='Insert your Name' required autoFocus/>
                    <input ref={surnameRef} id='inputSurname' type='text' placeholder='Insert your Surname' required/>
                    <input ref={emailRef} id='inputEmail' type='email' placeholder='Insert your Email' required/>
                    <label htmlFor='selectConnection'>Connection Status</label>
                    <select ref={connectionRef} id='selectConnection' onChange={(e) => connectionRef.current.value = e.target.value}>
                    <option value={false}>
                        Disconnected
                    </option>
                    <option value={true}>
                        Connected
                    </option>
                </select>
                </div>
                <div>
                    <button type='submit'>Add Contact</button>
                </div>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired

};


export default ContactForm;
