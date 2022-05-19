import React from 'react';
//@ts-ignore
import styles from './BrandCard.module.scss';

interface BrandType {
  img: string;
  title: string;
  caption: string;
}

const BrandCard = ({img, caption, title}: BrandType) => {
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