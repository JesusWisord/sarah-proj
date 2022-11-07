import React from 'react';
import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => (
  <header className={styles.header}>
  <Link href="/">
    <figure className={styles.logo}>
      <img src="/spl_logo.png"></img>
    </figure>
  </Link>
    <nav>
      <ul>
        <li>
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/envios">
            Envíos y Traslados
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
