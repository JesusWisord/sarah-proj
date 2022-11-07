import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from '../styles/Envios.module.scss'

export default function Envios() {
  return (
    <>
      <Head>
        <title>Servipre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero img="/envios.jpg" noInfo />
      <section className={styles.text}>
        <p>
          CONTAMOS CON SERVICIO DE ENVIOS Y TRASLADOS DE VEHICULOS A NIVEL NACIONAL,
          NUESTRO PERSONAL ESPECIALIZADO Y DE CONFIANZA SE ENCARGA DE ENTREGAR TU UNIDAD
          HASTA TU LOCALIDAD.
        </p>
        <p>
          ¿EL COSTO? DEPENDE DE TU LOCALIDAD PUEDES CONTACTAR A UNO DE NUESTROS ASESORES
          PROPORCIONAR TU C.P. Y TE ENVIARAN UNA COTIZACION.
        </p>
        <p>
          CONTAMOS CON DIFERENTES TIPOS DE TRASLADOS.
        </p>
        <ul>
          <li>
            CAJA CERRADA
          </li>
          <li>
            PLATAFORMA
          </li>
          <li>
            MADRINA (CUANDO SON MAS DE DOS UNIDADES)
          </li>
        </ul>
        <p>
          CONTAMOS CON RASTREO SATELITAL, Y NUESTROS ENVIOS CUENTAN CON SEGURO DE VIAJE.
        </p>
      </section>
      <Footer />
    </>
  );
}
