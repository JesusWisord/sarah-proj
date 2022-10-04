import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>
      <p>SPL S.A. DE C.V.</p>
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
            Venta De Vehículos
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
