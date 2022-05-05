import React from 'react';
import styles from './CarsSaleItem.module.scss';
import {ReactComponent as ArrowRight} from './arrowRight.svg';


const CardSaleItem = ({discount, title}) => {
  return (
    <div>
      <div className={styles.discountText}>{discount}% off</div>
      <div className={styles.saleText}><span/>sale</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.categoryText}>
        <span>shop the category</span>
        <ArrowRight/></div>
      </div>
  );
};

export default CardSaleItem;