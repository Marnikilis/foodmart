import React from 'react';
import styles from './BrandCard.module.scss';

const BrandCard = ({img, caption, title }) => {
  return (
    <div className={styles.brandCardContainer}>
        <div>
          <img src={img}/>
        </div>
        <div className={styles.text}>
          <span>{title}</span>
          <div>{caption}</div>
        </div>
    </div>
  );
};

export default BrandCard;