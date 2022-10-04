/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../styles/Modal.module.scss';

const Modal = ({ data, handleClose }) => (
  <div className={styles.modal}>
    <div className={styles.imageContainer}>
      <img src={`/catalogue/${data}`} alt="main product" />
    </div>
    <button
      type="button"
      onClick={() => handleClose()}
    >
      {
          window.innerWidth < 800 ? 'Atrás' : 'X'
        }
    </button>
  </div>
);

export default Modal;
