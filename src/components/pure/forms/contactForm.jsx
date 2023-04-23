import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact-class';
import Modal from 'react-modal';
import '../../../styles/contact-styles.scss'

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

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const customStyle = {
        content: {
            height: '500px',
            width: '500px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
          },
    };

    return (
        <div>
            <button onClick={openModal} className='btn btn-primary'>Add Contact</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyle}>
                <form onSubmit={addContact}>
                <div className='modal-header'>
                    <h1>Add your Contact</h1>
                </div>
                    <div className='inserInp'>
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
                    <div className='btnStyle'>
                        <button onClick={closeModal} className='btn btn-danger' type='button'>Close</button>
                        <button className='btn btn-primary' type='submit'>Save Contact</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;