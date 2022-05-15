import React from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({img, title}) => {
  return (
    <div className={styles.cardContainer}>
    <div className={styles.cardContent}>
      <div>
        <img src={img} alt='Category'/>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
    </div>
  );
};

export default CategoryCard;