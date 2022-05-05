import React from 'react';
import styles from './Brands.module.scss';
import {ReactComponent as Arrow} from "../Category/categorySvg/smallArrow.svg";
import honey from './brandsImg/honey.png';
import herb from './brandsImg/herb.png';
import tuna from './brandsImg/tuna.png';
import hotz from './brandsImg/hotz.png';
import BrandCard from "./BrandCard/BrandCard";

const brands=[
  {img:honey, caption:'Honey best nectar you wish to get', title:'Amber Jar'},
  {img:herb, caption:'Pure herb the only natural brand', title:'Pure Herb'},
  {img:tuna, caption:'Where\'s tuna? Tuna, clear choice!', title:'Tuna'},
  {img:hotz, caption:'the one junk food that’s natural', title:'Hotz'},
];
const Brands = () => {
  return (
      <div className={'mainContainer'}>
        <div className={styles.container}>
          <div className={'headingContainer'}>
            <div className={'heading'}>Newly Arrived Brands</div>
            <div className={'buttons'}>
              <button>
                <div className={'btnText'}>
                  view all offers
                </div>
                <Arrow/></button>
              <div>
                <button className={'arrowBtn'}>&#60;</button>
                <button className={'arrowBtn'}> &#62;</button>
              </div>
            </div>
          </div>
          <div className={styles.brandCards}>
            {brands.map(brand =>{
              return <BrandCard img={brand.img} title={brand.title} caption={brand.caption}/>
            })}
          </div>
        </div>
      </div>
  );
};

export default Brands;