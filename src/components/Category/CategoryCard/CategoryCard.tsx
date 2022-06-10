import React from "react";
//@ts-ignore
import styles from "./CategoryCard.module.scss";

interface CategoryType {
  img: string;
  title: string;
}

const CategoryCard = ({ img, title }: CategoryType) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div>
          <img src={img} alt="Category" />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
