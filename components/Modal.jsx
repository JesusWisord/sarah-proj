import React, { useState } from 'react';
import styles from '../styles/Modal.module.scss';

const Modal = ({ data, handleClose }) => {
  const [image, setImage] = useState(0);
  return (
    <div className={styles.modal}>
      <div className={styles.imageContainer}>
        <img src={`/catalogue/${data.images[image]}`} alt="main product" />
      </div>
      <p>
        {data.data}
      </p>
      <button
        type="button"
        onClick={() => handleClose()}
      >
        X
      </button>
      <div className={styles.miniImages}>
        {data.images.map((item, index) => (
          <div
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
