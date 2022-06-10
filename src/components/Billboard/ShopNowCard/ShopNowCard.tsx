import React from "react";
//@ts-ignore
import styles from "./ShopNowCard.module.scss";

interface ShopNowType {
  img: string;
  title: string;
  color: string;
}

const ShopNowCard = ({ title, img, color }: ShopNowType) => {
  return (
    <div className={styles.firstCardContainer} style={{ background: color }}>
      <div className={styles.firstCardContent}>
        <div className={styles.shopNowCard}>
          <div className={styles.text}>100% natural</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.afterTitleText}>
            Best selling summer juice with natural extracts.
          </div>
          <button className={styles.shopBtn}>shop now</button>
        </div>
        <div className={styles.imageContainer}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopNowCard;
