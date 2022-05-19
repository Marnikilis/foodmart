import React from 'react';
//@ts-ignore
import styles from './Banners.module.scss';
import leavesTop from '../../images/leaves1.png';
import leavesBottom from '../../images/leaves2.png';
import chocolate from './bannersImg/chocolate.png';
import muff from './bannersImg/muff.png';
import BannerCard from "./BannerCard/BannerCard";


const discountProducts = [
  {img: chocolate, discount: '15', title: 'Luxa Dark Chocolate', caption: 'Chocolate is only the happiness that you can eat.'},
  {img: muff, discount: '25', title: 'Creamy Muffins', caption: 'Very tasty & creamy vanilla flavour creamy muffins.'},
];

const Banners = () => {
  return (
    <div>
      <div className={'mainContainer'}>
        <div className={styles.container}>
          <img src={leavesTop} className={styles.leavesTop} alt='Leaves'/>
          <img src={leavesBottom} className={styles.leavesBottom} alt='Leaves'/>
          <div className={styles.cards}>
            <div className={styles.chocolateCard}>
              <BannerCard item={discountProducts[0]}/>
              <div className={styles.imageContainer}>
                <div className={styles.firstBackgroundImage}/>
              </div>
            </div>
            <div className={styles.muffinsCard}>
              <BannerCard item={discountProducts[1]}/>
              <div className={styles.imageContainer}>
                <div className={styles.secondBackgroundImage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;