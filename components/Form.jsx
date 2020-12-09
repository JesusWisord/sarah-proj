import React, { useState } from 'react';
import styles from '../styles/Form.module.scss';

const Form = () => {
  const [status, setStatus] = useState('');

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  }

  return (
    <div className={styles.formContainer}>
      <h1>Contacto</h1>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/xoqpkeld"
        method="POST"
      >
        <label htmlFor="name">
          Nombre:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="number">
          Teléfono:
          <input type="number" name="number" id="number" />
        </label>
        {status === 'SUCCESS' ? <p>Thanks!</p> : <button type="button">Submit</button>}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  );
};

export default Form;
