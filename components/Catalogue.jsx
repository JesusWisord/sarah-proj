import React, { useState, useRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import CatalogueItem from './CatalogueItem';
import Modal from './Modal';
import styles from '../styles/Catalogue.module.scss';
import data from '../json/data.json';

const Catalogue = () => {
  const [modal, setModal] = useState(false);
  const [itemData, setItemData] = useState(null);
  let scrollX = 0;
  const scrollContainer = useRef(null);
  const handleClick = (id) => {
    const item = data[id];
    setItemData(item);
    setModal(true);
  };
  const handleScroll = (side) => {
    if (side === 'left') {
      scrollX -= window.innerWidth - 100;
    } else {
      scrollX += window.innerWidth - 100;
    }
    if (scrollX > 9500) {
      scrollX = 8700;
    }
    if (scrollX < 0) {
      scrollX = 0;
    }
    scrollContainer.current.scroll(scrollX, 0);
  };
  return (
    <div className={styles.container} id="catalogo">
      <RiArrowLeftSLine className={styles.icon} onClick={() => handleScroll('left')} />
      <div className={styles.catalogue} ref={scrollContainer}>
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
      <RiArrowRightSLine className={styles.icon} onClick={() => handleScroll('right')} />
    </div>
  );
};

export default Catalogue;
