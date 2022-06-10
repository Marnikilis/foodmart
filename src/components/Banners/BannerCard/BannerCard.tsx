import React from "react";
//@ts-ignore
import styles from "./BannerCard.module.scss";

interface BannerType {
  discount: string;
  title: string;
  caption: string;
}

const BannerCard = ({ item }) => {
  const { discount, title, caption }: BannerType = item;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span> Upto {discount}% Off</span>
        <span>{title}</span>
        <span>{caption}</span>
        <button className={`blackBtn ${styles.buyBtn}`}>Shop It</button>
      </div>
    </div>
  );
};

export default BannerCard;
