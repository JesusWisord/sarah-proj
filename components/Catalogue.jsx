import React from 'react';
import CatalogueItem from './CatalogueItem';
import styles from '../styles/Catalogue.module.scss';

const Catalogue = () => (
  <div className={styles.catalogue}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
      <CatalogueItem key={`car${item}`} />
    ))}
  </div>
);

export default Catalogue;
