import React from 'react';
import Link from 'next/link';
import styles from '../styles/CatalogueItem.module.scss';

const CatalogueItem = ({
  image, text, id, disableLink,
}) => {
  if (disableLink) {
    return (
      <div className={styles.no_pointer}>
        <div className={styles.catalogue_item}>
          <img src={`/new_catalogue/${image}`} alt="" />
        </div>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <Link href={`/item/${id}`}>
      <div className={styles.item_container}>
        <div className={styles.catalogue_item}>
          <img src={`/new_catalogue/${image}`} alt="" />
        </div>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default CatalogueItem;
