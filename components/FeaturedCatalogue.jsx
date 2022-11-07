import React from 'react';
import styles from '../styles/Catalogue.module.scss';
import data from '../json/new_data.json';
import CatalogueItem from './CatalogueItem';

const FeaturedCatalogue = () => (
  <section className={styles.featured}>
    <h2>Catálogo</h2>
    <div className={styles.catalogue}>
      {data.map((item, index) => (
        <CatalogueItem
          image={item.images[0]}
          id={index}
          text={item.info}
        />
      ))}
    </div>
  </section>
);

export default FeaturedCatalogue;
