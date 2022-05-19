import React from 'react';
//@ts-ignore
import styles from './CardSaleItem.module.scss';
import { ReactComponent as ArrowRight } from './arrowRight.svg';

interface CardSaleType {
  discount: string;
  title: string;
}

const CardSaleItem = ({discount, title}: CardSaleType) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.discountText}>{discount}% off</div>
      <div className={styles.saleText}><span/>sale</div>
      <div className={styles.title}>{title}</div>
      <button className={styles.categoryText}>
        <span>shop the category</span>
        <ArrowRight/>
      </button>
    </div>
  );
};

export default CardSaleItem;