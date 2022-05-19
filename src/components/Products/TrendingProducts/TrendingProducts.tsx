import React from 'react';
//@ts-ignore
import styles from './TrendingProducts.module.scss';
import {NavLink} from "react-router-dom";
import juiceMelon from '../ProductCard/productImg/juiceMelon.png';
import tomatoes from '../ProductCard/productImg/tomatoes.png';
import cucumber from '../ProductCard/productImg/cucumber.png';
import ketchup from '../ProductCard/productImg/ketchup.png';
import avocado from '../ProductCard/productImg/avocado.png';
import cookies from '../ProductCard/productImg/cookies.png';
import bananas from '../ProductCard/productImg/bananas.png';
import orangeJuice from '../ProductCard/productImg/orangeJuice.png';
import milk from '../ProductCard/productImg/milk.png';
import rasberries from '../ProductCard/productImg/rasberries.png';
import ProductCard from "../ProductCard/ProductCard";

const trendProducts = [
  {img: juiceMelon, title: 'Sunstar Fresh Melon Juice', quantity: '1 unit', rating: '4.5', price: '$18.00'},
  {img: tomatoes, title: 'Fresh local tomatoes', quantity: '1 kg', rating: '4.0', price: '$5.00'},
  {img: cucumber, title: 'Fresh Cucumber', quantity: '1 kg', rating: '4.5', price: '$6.00'},
  {img: ketchup, title: 'Heinz tomato ketchup', quantity: '1 unit', rating: '5.0', price: '$9.00'},
  {img: avocado, title: 'Local Avocado', quantity: '1 kg', rating: '3.5', price: '$12.00'},
  {img: cookies, title: 'Munch Crunchy Cookies', quantity: '1 unit', rating: '4.5', price: '$8.00'},
  {img: bananas, title: 'Fresh Bananas', quantity: '1 kg', rating: '4.0', price: '$10.00'},
  {img: orangeJuice, title: 'Fresh Orange Juice', quantity: '1 unit', rating: '4.5', price: '$12.00'},
  {img: milk, title: 'Pure Dairy milk ', quantity: '1 unit', rating: '5.0', price: '$8.00'},
  {img: rasberries, title: 'Raspberries', quantity: '1 kg', rating: '3.5', price: '$14.00'},
];

const TrendingProducts = () : JSX.Element => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={styles.productsNav}>
          <div className={'heading'}>Trending Products</div>
          <div className={styles.navigation}>
            <NavLink to='/all' className={styles.link}>All</NavLink>
            <NavLink to='/fruits&' className={styles.link}>Fruits & Veges</NavLink>
            <NavLink to='/juicesVeges' className={styles.link}>Juices</NavLink>
            <NavLink to='/breadsSweets' className={styles.link}> Breads & Sweets </NavLink>
            <NavLink to='/oil&ghee' className={styles.link}>Oil & Ghee</NavLink>
            <NavLink to='/rawMeats' className={styles.link}> Raw Meats </NavLink>
            <NavLink to='/naturalHerbs' className={styles.link}>Natural Herbs</NavLink>
          </div>
        </div>
        <div className={styles.productsContainer}>
          {trendProducts.map(product => {
            return <ProductCard key={product.img} product={product}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;