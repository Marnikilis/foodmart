import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import barista from './topProductsImg/barista.png';
import kombucha from './topProductsImg/kombucha.png';
import lays from './topProductsImg/lays.png';
import oatMilk from './topProductsImg/oatMilk.png';
import raw from './topProductsImg/raw.png';
import styles from './TopProducts.module.scss';
import {ReactComponent as Arrow} from "../Category/categorySvg/smallArrow.svg";
import {ReactComponent as Clock} from './topProductsImg/clock.svg';

const topProducts = [
  {img:barista, title:'Pacific barista beverage', quantity:'1 unit', rating:'4.5',
    oldPrice:'$12.00', price:'$8.00', sold:'Sold: 30/40', discount:'-25%'},
  {img:kombucha, title:'Kombucha local lilikoi', quantity:'1 unit', rating:'4.0',
    oldPrice:'$12.00', price:'6.00', sold:'Sold: 9/25', discount:'-35%'},
  {img:lays, title:'Cheese flavoured Lays', quantity:'1 unit', rating:'4.5',
    oldPrice:'$12.00', price:'$8.00', sold:'Sold: 12/60', discount:'-15%'},
  {img:oatMilk, title:'Oat milk barista', quantity:'1 unit', rating:'5.0',
    oldPrice:'$8.00', price:'$5.00', sold:'Sold: 12/35', discount:'-39%'},
  {img:raw, title:'Dr. raw relax hearts', quantity:'1 unit', rating:'3.5',
    oldPrice:'$12.00', price:'$8.00', sold:'Sold: 5/25', discount:'-12%'},
];

const TopProducts = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={'headingContainer'}>
          <div className={'headingContainer'}>
            <div className={'heading'}>Top offered products</div>
            <div className={styles.expiresContainer}>
              <Clock/>
              Expires in:  12hr : 41min : 8s
            </div>
          </div>
        <div className={'buttons'}>
          <div>
            <button className={'arrowBtn'}>&#60;</button>
            <button className={'arrowBtn'}> &#62;</button>
          </div>
        </div>
        </div>
        <div className={styles.productsContainer}>
          {topProducts.map(product=>{
            return <ProductCard product={product}/>
          })}
        </div>
    </div>
    </div>
  );
};

export default TopProducts;