import React from 'react';
import styles from '../styles/CatalogueItem.module.scss'
const CatalogueItem = () => (
  <div className={styles.catalogue_item}>
    <img src="/cars/dodge-durango-36-v6-sxt-plus-D_NQ_NP_641483-MLM27048187086_032018-F.jpg" alt=""/>
    <p>Marca</p>
    <p>Precio</p>
  </div>
);

export default CatalogueItem;
