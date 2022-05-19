import React, {useRef} from 'react';
//@ts-ignore
import styles from './Category.module.scss';
import {ReactComponent as ArrowRight} from './categorySvg/smallArrow.svg';
import {ReactComponent as Arrow} from '../../images/arrow.svg';
import broccoli from './categorySvg/broccli.svg';
import bread from './categorySvg/bread.svg';
import wine from './categorySvg/wine.svg';
import oil from './categorySvg/oil.svg';
import meat from './categorySvg/meat.svg';
import herbs from './categorySvg/herbs.svg';
import CategoryCard from "./CategoryCard/CategoryCard";
import {useCarousel} from '../../hooks/useCarousel';

const categories = [
  {img: broccoli, title: 'Fruits & Veges'},
  {img: bread, title: 'Breads & Sweets'},
  {img: wine, title: 'Wine Drinks'},
  {img: oil, title: 'Oil & Ghee'},
  {img: meat, title: 'Raw Meat'},
  {img: herbs, title: 'Natural Herbs'},
  {img: broccoli, title: 'Fruits & Veges'},
  {img: bread, title: 'Breads & Sweets'},
  {img: wine, title: 'Wine Drinks'},
  {img: oil, title: 'Oil & Ghee'},
  {img: meat, title: 'Raw Meat'},
  {img: herbs, title: 'Natural Herbs'},
];

const Category = () => {
  const cardsRef = useRef();
  const carouselRef = useRef();

  const {nextCardHandler, prevCardHandler, onTouchEndHandler, onTouchStartHandler, nextDisabled, prevDisabled} = useCarousel({items: categories, ref: cardsRef, slider: carouselRef});

  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={'headingContainer'}>
          <div className={'firstHeadingContainer'}>
            <div className={'heading'}>Category</div>
            <button className={'btnAll'}>
              <div className={'btnText'}>
                View All Categories
              </div>
              <ArrowRight/>
            </button>
          </div>
          <div className={'buttons'}>
            <button disabled={prevDisabled} onClick={prevCardHandler} className={'arrowBtn'}>
              <Arrow className={'prevBtn'}/>
            </button>
            <button disabled={nextDisabled} onClick={nextCardHandler} className={'arrowBtn'}>
              <Arrow/>
            </button>
          </div>
        </div>
        <div ref={carouselRef} className={styles.carouselContainer}>
          <div ref={cardsRef} onTouchStart={onTouchStartHandler} onTouchEnd={onTouchEndHandler} className={styles.categoryCards}>
            {categories.map((category, i) => {
              return <CategoryCard key={i} img={category.img} title={category.title}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;