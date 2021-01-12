import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>
      <img src="/logo.jpg" alt="" />
      <p>686-417-1354</p>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#contact">
            ¿Quieres empeñar?
          </a>
        </li>
        <li>
          <a href="#catalogo">
            Vehículos en Venta
          </a>
        </li>
        <li>
          <a href="#proceso">
            Proceso de envío
          </a>
        </li>
        <li>
          <a href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
