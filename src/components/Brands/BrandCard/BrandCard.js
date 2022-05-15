import React from 'react';
import styles from './BrandCard.module.scss';

const BrandCard = ({img, caption, title}) => {
  return (
    <div className={styles.brandCardContainer}>
      <div className={styles.brandCardContent}>
        <img src={img} alt='Brand'/>
        <div className={styles.text}>
          <span>{title}</span>
          <div>{caption}</div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;