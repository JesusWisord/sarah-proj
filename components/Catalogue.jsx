import React, { useState } from 'react';
import CatalogueItem from './CatalogueItem';
import Modal from './Modal';
import styles from '../styles/Catalogue.module.scss';
import data from '../json/data.json';

const Catalogue = () => {
  const [modal, setModal] = useState(false);
  const [itemData, setItemData] = useState(null);
  const handleClick = (id) => {
    const item = data[id];
    setItemData(item);
    setModal(true);
  };
  return (
    <div className={styles.catalogue}>
      { modal
        ? <Modal data={itemData} handleClose={() => setModal(false)} />
        : ''}
      {data.map((item, index) => (
        <CatalogueItem
          key={`car-${index}`}
          image={item.images[0]}
          handleClick={handleClick}
          id={index}
          price={item.price}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Catalogue;
