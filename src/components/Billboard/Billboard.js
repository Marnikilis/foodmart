import React from 'react';
import styles from './Billboard.module.scss';
import CardSaleItem from "../CardSale/CardSaleItem";
// import bottle from './billboardSvg/bottle.png';

const Billboard = () => {
  return (
    <div className={styles.background}>
      <div className={'mainContainer'}>
        <div className={styles.container}>
          <div className={styles.firstCardContainer}>
            <div className={styles.shopNowCard}>
              <div className={styles.text}>100% natural</div>
              <div className={styles.title}>Fresh Smoothie & <br/> Summer Juice</div>
              <div className={styles.afterTitleText}>
                Best selling summer juice with natural extracts.
              </div>
              <button className={styles.shopBtn}>shop now</button>
              <div className={styles.dots}>
                <span/>
              </div>
            </div>
          </div>
          <div className={styles.secondCardsContainer}>
            <div className={styles.fruitsCard}>
              <CardSaleItem title='Fruits & Vegetables' discount='20'/>
            </div>
            <div className={styles.bakeCard}>
              <CardSaleItem title='Baked Products' discount='15'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;