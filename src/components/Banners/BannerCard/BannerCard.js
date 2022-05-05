import React from 'react';
import styles from './BannerCard.module.scss';

const BannerCard = ({item}) => {
  return (
    <div className={styles.container}>
       <div className={styles.textContainer}>
         <span> Upto {item.discount}% Off</span>
         <span>{item.title}</span>
         <span>{item.caption}</span>
         <button className={styles.buyBtn}>
           Shop It
         </button>
       </div>
      <div>
      <img src={item.img} alt='Product'/>
      </div>
    </div>
  );
};

export default BannerCard;