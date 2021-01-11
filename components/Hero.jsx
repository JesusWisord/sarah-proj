import React from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <img src="/car.png" alt="" />
    <div className={styles.right_side}>
      <p>
        Brindamos servicios de empeño y venta de vehículos en general.
        Contamos con servicio de envío y traslado a nivel nacional.
        Todas nuestras unidades se entregan con: Factura, Contrato compra-venta,
        Garantía, Baja de Placas y Permiso para circular por 30 días a nivel nacional.
      </p>
      <button type="button">
        <a href="#contact">
          ¿Quieres empeñar?
        </a>
      </button>
    </div>
  </div>
);

export default Hero;
