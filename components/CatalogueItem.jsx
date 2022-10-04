import React from 'react';
import styles from '../styles/CatalogueItem.module.scss';

const CatalogueItem = ({
  image, handleClick, id
}) => (
  <div className={styles.catalogue_item} onClick={() => handleClick(id)}>
    <img src={`/catalogue/${image}`} alt="" />
  </div>
);

export default CatalogueItem;
