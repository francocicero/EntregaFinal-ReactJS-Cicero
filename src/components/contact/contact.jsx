import React from 'react';
import './contact.css'


const ContactForm = () => {
  return (
     <>
      <div>
        <h1 className='title_contact'>Formulario de Contacto</h1>
      </div>
      <div class="container_form">
        <form>
          <label htmlFor='nombre'>Nombre:</label>
          <input type="text" id="nombre" name="nombre" required></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
          <button className='contact_buton' type="submit">Enviar</button>
        </form>
      </div>

     </>
  );

}

export default ContactForm;
