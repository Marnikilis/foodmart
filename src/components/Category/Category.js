import React from 'react';
import styles from './Category.module.scss';
import {ReactComponent as Arrow} from './categorySvg/smallArrow.svg';
import broccoli from './categorySvg/broccli.svg';
import bread from './categorySvg/bread.svg';
import wine from './categorySvg/wine.svg';
import oil from './categorySvg/oil.svg';
import meat from './categorySvg/meat.svg';
import herbs from './categorySvg/herbs.svg';
import CategoryCard from "./CategoryCard/CategoryCard";

const categories = [
  {img: broccoli, title: 'Fruits & Veges'},
  {img: bread, title: 'Breads & Sweets'},
  {img: wine, title: 'Wine Drinks'},
  {img: oil, title: 'Oil & Ghee'},
  {img: meat, title: 'Raw Meat'},
  {img: herbs, title: 'Natural Herbs'},
];

const Category = () => {
  return (
      <div className={'mainContainer'}>
        <div className={styles.container}>
          <div className={'headingContainer'}>
            <div className={'heading'}>Category</div>
            <div className={'buttons'}>
              <button>
                <div className={'btnText'}>
                  View All Categories
                </div>
                <Arrow/></button>
              <div>
                <button disabled className={'arrowBtn'}>&#60;</button>
                <button className={'arrowBtn'}> &#62;</button>
              </div>
            </div>
          </div>
          <div className={styles.categoryCards}>
            {categories.map((category, i) => {
              return <CategoryCard key={i} img={category.img} title={category.title}/>
            })}
          </div>
        </div>
      </div>
  );
};

export default Category;