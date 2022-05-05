import React from 'react';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({img, title}) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={img} alt='Category'/>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default CategoryCard;