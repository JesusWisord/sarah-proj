import React from 'react';
import styles from '../styles/DeliverProcess.module.scss';

const DeliverProcess = () => (
  <div className={styles.deliverProcess} id="proceso">
    <h1 className={styles.title}>Procesos de envío</h1>
    <div className={styles.paragraph}>
      <img src="/deliver_process.jpg" alt="Carro entregado a cliente" />
      <p>
        Contamos con servicio de envios y traslados a nivel nacional en plataforma.
      </p>
    </div>
    <div className={styles.paragraph}>
      <p>
        Nuestros envíos incluyen seguro de
        viaje por 72 horas tiempo estimado de entrega a nivel nacional.
      </p>
      <img src="/deliver_process2.jpg" alt="Carro entregado a cliente" />
    </div>
  </div>
);

export default DeliverProcess;
