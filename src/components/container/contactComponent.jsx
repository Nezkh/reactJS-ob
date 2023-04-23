import React from 'react';
import { Contact } from '../../models/contact-class';
import { useState } from 'react';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import '../../styles/contact-styles.scss'

const ContactListComponent = () => {

    const defaultContact = new Contact('Name', 'Surname', 'email@email.com', false);

    const [contacts, setContacts] = useState([defaultContact]);

    function connectionContact(contact){
        console.log('Estado de conección: ', contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts)
    }

    return (
        <div>
            <h1 className='h1-title'>List of Contacts</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Surname</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Connection</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => {
                            return(
                                <ContactComponent
                                key={index}
                                contact={contact}
                                connection={connectionContact}
                                remove={deleteContact}
                                >
                                </ContactComponent>
                                )
                             }
                        )}
                    </tbody>
                </table>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactListComponent;
