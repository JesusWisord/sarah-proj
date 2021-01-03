import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header} >
    <img src="/logo.jpg" alt=""/>
    <nav>
      <ul>
        <li>
          <a href="#proceso">
            ¿Quieres empeñar?
          </a>
        </li>
        <li>
          <a href="#proceso">
            Vehículos en Venta
          </a>
        </li>
        <li>
          <a href="#proceso">
            Proceso de envío
          </a>
        </li>
        <li>
          <a href="#proceso">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
