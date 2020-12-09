import React from 'react';
import styles from '../styles/DeliverProcess.module.scss';

const DeliverProcess = () => (
  <div className={styles.deliverProcess}>
    <h1 className={styles.title}>Procesos de envío</h1>
    <div className={styles.paragraph}>
      <img src="/deliver_process.jpg" alt="Carro entregado a cliente" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris scelerisque sit pellentesque eget pulvinar hendrerit.
        Mi felis at eget tincidunt feugiat convallis commodo varius.
        Tellus sed integer faucibus placerat dignissim faucibus id.
        Dictum in et, pretium nunc ante leo. In mattis amet aliquam
        sit rhoncus orci eget maecenas vestibulum. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Mauris scelerisque sit
        pellentesque eget pulvinar hendrerit. Mi felis at eget tincidunt
        feugiat convallis commodo varius. Tellus sed integer faucibus
        placerat dignissim faucibus id. Dictum in et, pretium nunc ante leo.
        In mattis amet aliquam sit rhoncus orci eget maecenas vestibulum.
      </p>
    </div>
    <div className={styles.paragraph}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris scelerisque sit pellentesque eget pulvinar hendrerit.
        Mi felis at eget tincidunt feugiat convallis commodo varius.
        Tellus sed integer faucibus placerat dignissim faucibus id.
        Dictum in et, pretium nunc ante leo. In mattis amet aliquam
        sit rhoncus orci eget maecenas vestibulum. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Mauris scelerisque sit
        pellentesque eget pulvinar hendrerit. Mi felis at eget tincidunt
        feugiat convallis commodo varius. Tellus sed integer faucibus
        placerat dignissim faucibus id. Dictum in et, pretium nunc ante leo.
        In mattis amet aliquam sit rhoncus orci eget maecenas vestibulum.
      </p>
      <img src="/deliver_process.jpg" alt="Carro entregado a cliente" />
    </div>
  </div>
);

export default DeliverProcess;
