import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact-class';


const ContactComponent = ({ contact, connection, remove }) => {

    function contactConnectedIcon(){
        if(contact.connected){
            console.log('on')
            return (<i onClick={() => connection(contact)} className='bi-toggle-on task-action' style={{color: 'orange'}} ></i>)
        } else {
            console.log('off')
            return (<i onClick={() => connection(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    const contactRemove = <i onClick={() => remove(contact)} className='bi-trash task-action' style={{color: 'tomato'}}></i>

    return (
        <tr>
            <th>
                <span>{ contact.name }</span>
            </th>
            <td>
                <span>{ contact.surname }</span>
            </td>
            <td>
                <span>{ contact.email }</span>
            </td>
            <td>
                <span>{ contactConnectedIcon() }</span>
            </td>
            <td>
                <span>{contactRemove}</span>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connection: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
