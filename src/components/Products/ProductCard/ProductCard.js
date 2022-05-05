import React, {useState} from 'react';
import styles from './ProductCard.module.scss';
import {ReactComponent as Star} from './productImg/star.svg';
import {ReactComponent as Cart} from './productImg/cart.svg';
import {ReactComponent as Heart} from './productImg/heart.svg';

const ProductCard = ({product}) => {
  const [count, setCount] = useState(0);


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={product.img} alt='Product'/>
        <div className={styles.favorite}>
          <Heart className={styles.heart}/>
        </div>
        <div className={styles.discountContainer}>
          <div>{product.discount}</div>
        </div>
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.ratingContainer}>
        <span>{product.quantity}</span>
        <Star/>
        <div className={styles.rating}>{product.rating}</div>
      </div>
      <span className={styles.oldPrice}>{product.oldPrice}</span>
      <span className={styles.price}> {product.price} </span>
      <div className={styles.sold}>{product.sold}</div>
      <div className={styles.buyContainer}>
        <div className={styles.amountContainer}>
          <button className={styles.btnAmount} onClick={() => setCount(count - 1)}>-</button>
          <div className={styles.count}> {count}</div>
          <button className={styles.btnAmount} onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div className={styles.addToCard}>
          <span> add to cart</span>
          <Cart className={styles.cart}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;