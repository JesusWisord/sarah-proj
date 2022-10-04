import React from 'react';
import styles from '../styles/Card.module.scss';

const Card = () => (
  <div className={styles.card_container}>
    <div className={styles.card}>
      <h3>
        Misión
      </h3>
      <p>
        Satisfacer las necesidades económicas de nuestros
        clientes mediante los más eficientes préstamos inmediatos,
        brindando el mejor servicio en el mercado.
      </p>
    </div>
    <div className={styles.card}>
      <h3>
        Visión
      </h3>
      <p>
        Ser reconocidos como la empresa con mejor servicio
        en el mercado prendario y de venta al detalle; asegurando
        los mayores índices de rentabilidad, brindando a nuestros
        colaboradores un ambiente con oportunidades de desarrollo.
      </p>
    </div>
    <div className={styles.card}>
      <h3>
        Valores
      </h3>
      <p>
        Enfoque a resultados: Cumplir metas y objetivos preestablecidos
        como primera condición de grupo.
        <br />
        Honestidad absoluta: Para con nuestros clientes,
        compañeros de trabajo, proveedores e inversionistas.
        <br />
        Confiabilidad: Cumplir siempre los compromisos contraídos.
        <br />
        Servicio de muy alta calidad: Hacia nuestros clientes internos y externos
      </p>
    </div>
  </div>
);

export default Card;
