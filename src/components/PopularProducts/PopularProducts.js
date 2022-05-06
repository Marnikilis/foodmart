import React from 'react';
import styles from './PopularProducts.module.scss';

const products = [{title: 'Blue diamon almonds'}, {title: 'Angie’s Boomchickapop Corn'}, {title: 'Salty kettle Corn'},
  {title: 'Chobani Greek Yogurt'}, {title: 'Sweet Vanilla Yogurt'}, {title: 'Foster Farms Takeout Crispy wings'},
  {title: 'Warrior Blend Organic'}, {title: 'Encore Seafoods Stuffed Alaskan Salmon'}, {title: 'Chao Cheese Creamy'},
  {title: 'Chicken meatballs'}, {title: 'Werther’s caramel hard candies'}, {title: 'Mate coffee creamer'},
  {title: 'Pasture raised chicken eggs'}, {title: 'Tree top fruit water'}, {title: 'Natural Vanilla Light Roast Coffee'},
  {title: 'Sweet Vanilla essence Yogurt'},];

const PopularProducts = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={'heading'}>People are also looking for</div>
        <div className={styles.productsContainer}>
          {products.map(product => {
            return (
              <div>{product.title}</div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;