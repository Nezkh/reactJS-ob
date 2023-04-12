export class Contacto {
    nombre = '';
    apellido = '';
    mail = '';
    contacto = false

        constructor(nombre, apellido, mail, contacto) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.contacto = contacto
        }

}