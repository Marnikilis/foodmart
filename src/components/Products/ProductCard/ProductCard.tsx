import React, { useState } from "react";
//@ts-ignore
import styles from "./ProductCard.module.scss";
import { ReactComponent as Star } from "./productImg/star.svg";
import { ReactComponent as Cart } from "./productImg/cart.svg";
import { ReactComponent as Heart } from "./productImg/heart.svg";

interface Product {
  img: string;
  discount: string | number;
  title: string;
  quantity: string;
  rating: string | number;
  oldPrice?: string | number;
  price: string | number;
  sold?: string | number;
}

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const {
    img,
    discount,
    title,
    quantity,
    rating,
    oldPrice,
    price,
    sold,
  }: Product = product;

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.favorite}>
            <Heart className={styles.heart} />
          </div>
          <div className={styles.discountContainer}>
            <div>{discount}</div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.ratingContainer}>
            <span>{quantity}</span>
            <Star />
            <div className={styles.rating}>{rating}</div>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.oldPrice}>{oldPrice}</span>
            <span className={styles.price}> {price} </span>
          </div>
          <div className={styles.sold}>{sold}</div>
          <div className={styles.buyContainer}>
            <div className={styles.amountContainer}>
              <button
                className={styles.btnAmount}
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <div className={styles.count}>{count}</div>
              <button
                className={styles.btnAmount}
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button className={styles.addToCard}>
              <div> add to cart</div>
              <Cart className={styles.cart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
