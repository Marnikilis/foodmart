import React from 'react';
import {ReactComponent as Arrow} from "../Category/categorySvg/smallArrow.svg";
import fruits from './articlesImg/fruits.png';
import Article from "./AtricleCard/Article";
import styles from './Aticles.module.scss';


const articles = [
  {img: fruits, data: '12 jan, 2021', time: '15 min', title: 'Right way to preserve the fruits & other organics'},
  {img: fruits, data: '12 jan, 2021', time: '15 min', title: 'How to maintain the freshness of vegetables'},
  {img: fruits, data: '12 jan, 2021', time: '15 min', title: 'Right way to preserve the fruits & other organics'},
]
const Articles = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={'headingContainer'}>
          <div className={'heading'}>our latest articles</div>
          <div className={'buttons'}>
            <button>
              <div className={'btnText'}>
                Read all articles
              </div>
              <Arrow/></button>
          </div>
        </div>
        <div className={styles.articlesContainer}>
          {articles.map((article,i) => {
            return <Article key={i} content={article}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;