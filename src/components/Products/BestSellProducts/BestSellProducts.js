import React from 'react';
import styles from '../Products.module.scss';
import ProductCard from "../ProductCard/ProductCard";
import juiceMelon from "../ProductCard/productImg/juiceMelon.png";
import tomatoes from "../ProductCard/productImg/tomatoes.png";
import cucumber from "../ProductCard/productImg/cucumber.png";
import ketchup from "../ProductCard/productImg/ketchup.png";
import avocado from "../ProductCard/productImg/avocado.png";


const bestSellProducts = [
  {img: juiceMelon, title: 'Sunstar Fresh Melon Juice', quantity: '1 unit', rating: '4.5', price: '$18.00'},
  {img: tomatoes, title: 'Fresh local tomatoes', quantity: '1 kg', rating: '4.0', price: '$5.00'},
  {img: cucumber, title: 'Fresh Cucumber', quantity: '1 kg', rating: '4.5', price: '$6.00'},
  {img: ketchup, title: 'Heinz tomato ketchup', quantity: '1 unit', rating: '5.0', price: '$9.00'},
  {img: avocado, title: 'Local Avocado', quantity: '1 kg', rating: '3.5', price: '$12.00'},
];

const BestSellProducts = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={'headingContainer'}>
            <div className={'heading'}>Best selling products</div>
          <div className={'buttons'}>
            <div>
              <button className={'arrowBtn'}>&#60;</button>
              <button className={'arrowBtn'}> &#62;</button>
            </div>
          </div>
        </div>
        <div className={styles.productsContainer}>
          {bestSellProducts.map(product => {
            return <ProductCard key={product.img} product={product}/>
          })}
        </div>
      </div>
    </div>
  );
};


export default BestSellProducts;