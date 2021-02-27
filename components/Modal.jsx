import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Modal.module.scss';

const Modal = ({ data, handleClose }) => {
  const [image, setImage] = useState(0);
  return (
    <div className={styles.modal}>
      <div className={styles.imageContainer}>
        <img src={`/catalogue/${data.images[image]}`} alt="main product" />
      </div>
      <div className={styles.textContainer}>
        <p>
          {data.data}
        </p>
      </div>
      <button
        type="button"
        onClick={() => handleClose()}
      >
        {
          window.innerWidth < 800 ? 'Atrás' : 'X'
        }
      </button>
      <div className={styles.miniImages}>
        {data.images.map((item, index) => (
          <div
            key={uuidv4()}
            className={styles.miniContainer}
            alt="item"
            onClick={() => setImage(index)}
          >
            <img src={`/catalogue/${item}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
