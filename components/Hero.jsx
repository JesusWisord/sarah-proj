import React from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <figure>
      <img src="/hero.jpg" alt="" />
    </figure>
    <div className={styles.float}>
      <h2>
        Empresa en soluciones financieras, líderes en el
        mercado sobre el préstamo de automotores, estamos
        listos para apoyarte.
      </h2>
      <button type="button">
        <a href="#contact">
          ¿Quieres empeñar?
        </a>
      </button>
    </div>
  </div>
);

export default Hero;
