import React, {useRef, useState} from 'react';
import styles from './Billboard.module.scss';
import CardSaleItem from "../CardSale/CardSaleItem";
import ShopNowCard from "./ShopNowCard/ShopNowCard";
import bottle from './billboardSvg/bottle.png';

const cardContent = [
  {img: bottle, color: '#E6F3FA', title: 'Fresh Smoothie & Summer Juice'},
  {img: bottle, color: '#EEF5E4', title: 'Fresh Smoothie & Summer Juice'},
  {img: bottle, color: '#F9EBE7', title: 'Fresh Smoothie & Summer Juice'},
]

const Billboard = () => {
  const [slide, setSlide] = useState(1);
  const sliderRef = useRef();

  let position = 0;
  let endPosition = 0;

  const firstSlideHandler = () => {
    sliderRef.current.style.marginLeft = 0 + 'px';
    setSlide(1)
  }

  const middleSlideHandler = () => {
    let width = sliderRef.current.children[0].offsetWidth;
    let slides = cardContent.length - 2;
    sliderRef.current.style.marginLeft = -width * slides + 'px';
  }

  const lastSlideHandler = () => {
    let width = sliderRef.current.children[0].offsetWidth;
    let slides = cardContent.length - 1;
    sliderRef.current.style.marginLeft = -width * slides + 'px';
  }

  const onTouchStartHandler = (e) => {
    position = e.targetTouches[0].clientX;
  }

  const onTouchEndHandler = (e) => {
    let width = sliderRef.current.children[0].offsetWidth;
    endPosition = e.changedTouches[0].clientX;
    let slides = cardContent.length - 1;

    if (position - endPosition > 100 && slide < slides) {
      sliderRef.current.style.marginLeft = -width * slide + 'px';
      setSlide(2)
    } else if (position - endPosition > 100 && slide === slides) {
      sliderRef.current.style.marginLeft = -width * slide + 'px';
      setSlide(3)
    } else if (position - endPosition < -100 && slide === cardContent.length) {
      sliderRef.current.style.marginLeft = -width + 'px';
      setSlide(2)
    } else if (position - endPosition < -100 && slide === slides) {
      firstSlideHandler()
    }
  }

  return (
    <div className={styles.background}>
      <div className={'mainContainer'}>
        <div className={styles.container}>
          <div className={styles.carouselContainer}>
            <div ref={sliderRef} onTouchStart={onTouchStartHandler} onTouchEnd={onTouchEndHandler} className={styles.cardsSlider}>
              {cardContent.map((content, i) => {
                return <ShopNowCard key={i} title={content.title} img={content.img} color={content.color}/>
              })}
            </div>
            <div className={styles.dots}>
              <button onClick={firstSlideHandler}/>
              <button onClick={middleSlideHandler}/>
              <button onClick={lastSlideHandler}/>
            </div>
          </div>
          <div className={styles.secondCardsContainer}>
            <div className={styles.fruitsCard}>
              <CardSaleItem title='Fruits & Vegetables' discount='20'/>
              <div className={styles.secondCardsImageContainer}>
                <div className={styles.fruitsImage}/>
              </div>
            </div>
            <div className={styles.bakeCard}>
              <CardSaleItem title='Baked Products' discount='15'/>
              <div className={styles.secondCardsImageContainer}>
                <div className={styles.bakeryImage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;