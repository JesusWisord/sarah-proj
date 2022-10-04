import React from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <img src="/car.png" alt="" />
    <div className={styles.right_side}>
      <p>
        Somos una empresa en soluciones financieras, líderes en el
        mercado sobre el préstamo de automotores, estamos
        listos para apoyarte.
      </p>
      <p>
        Si necesitas efectivo y tu automotor puede ser la solución,
        pero no conoces los requisitos, modalidades y beneficios que te ofrecemos,
        acércate a nosotros para que podamos ayudarte y apoyarte durante el proceso de empeño.
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
