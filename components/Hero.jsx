import React from 'react';
import styles from '../styles/Hero.module.scss';

const Hero = ({ img = '/hero.jpg', noInfo }) => (
  <div className={styles.hero}>
    <figure>
      <img src={img} alt="" />
    </figure>
    { !noInfo
      && (
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
      )}
  </div>
);

export default Hero;
