import React from 'react';
import styles from '../styles/Card.module.scss';

const Information = () => (
  <div className={styles.card_container}>
    <div className={styles.card}>
      <h3>
        Empeños
      </h3>
      <ul>
        <li>El monto de préstamo puede ser hasta del 85% del valor de tu auto.</li>
        <li>Trámite sencillo y entrega del préstamo el mismo día.</li>
        <li>El contrato de empeño puede ser semanal, quincenal o mensual.</li>
        <li>Sin Aval, no revisamos buró de crédito.</li>
        <li>Avalúo gratuito.</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>
        Requisitos Para Empeñar tu Automotor
      </h3>
      <ul>
        <li>Facturas Originales</li>
        <li>Vehículos No Chocados</li>
        <li>Vehículos Nacionales</li>
        <li>Comprobante de Domicilio</li>
        <li>Identificación Oficial Vigente</li>
        <li>Duplicado de Llaves</li>
      </ul>
    </div>
    <div className={styles.card}>
      <h3>
        Recibimos
      </h3>
      <ul>
        <li>Autos</li>
        <li>Camionetas</li>
        <li>Motos</li>
        <li>Maquinaria Pesada</li>
        <li>Tractocamión</li>
      </ul>
    </div>
  </div>
);

export default Information;
