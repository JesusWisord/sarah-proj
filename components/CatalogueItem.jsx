import React from 'react';
import CurrencyFormat from 'react-currency-format';
import styles from '../styles/CatalogueItem.module.scss';

const CatalogueItem = ({
  image, handleClick, id, price, name,
}) => (
  <div className={styles.catalogue_item} onClick={() => handleClick(id)}>
    <img src={`/catalogue/${image}`} alt="" />
    <p>
      {name.substring(0, 30)}
    </p>
    {
      price
        ? (
          <p>
            <CurrencyFormat
              value={price}
              displayType="text"
              thousandSeparator
              prefix="$"
            />
          </p>
        )
        : ''
    }
  </div>
);

export default CatalogueItem;
