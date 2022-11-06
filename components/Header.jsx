import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <figure className={styles.logo}>
      <img src="spl_logo.png"></img>
    </figure>
    <nav>
      <ul>
        <li>
          <a href="#contact">
            Inicio
          </a>
        </li>
        <li>
          <a href="#catalogo">
            Envíos y Traslados
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
