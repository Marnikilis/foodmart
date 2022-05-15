import React, {useRef} from 'react';
import {useCarousel} from "../../../hooks/useCarousel";
import styles from "../Products.module.scss";
import {ReactComponent as Clock} from "../TopProducts/topProductsImg/clock.svg";
import {ReactComponent as Arrow} from "../../../images/arrow.svg";
import ProductCard from "../ProductCard/ProductCard";

const ProductCarousel = ({products, heading, expire}) => {
  const productsRef = useRef();
  const carouselRef = useRef();

  const {nextCardHandler, prevCardHandler, nextDisabled, prevDisabled} = useCarousel({items: products, ref: productsRef, slider: carouselRef});

  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <div className={'headingContainer'}>
          <div className={'heading'}>{heading}</div>
          <div className={styles.expiresContainer} style={{padding: expire ? '5px 10px' : '0'}}>
            <Clock style={{display: expire ? 'flex' : 'none'}}/>
            {expire}
          </div>
          <div className={'buttons'}>
            <div>
              <button disabled={prevDisabled} onClick={prevCardHandler} className={'arrowBtn'}>
                <Arrow className={'prevBtn'}/>
              </button>
              <button disabled={nextDisabled} onClick={nextCardHandler} className={'arrowBtn'}>
                <Arrow/>
              </button>
            </div>
          </div>
        </div>
        <div ref={carouselRef} className={styles.carouselContainer}>
          <div ref={productsRef} className={styles.productsContainer}>
            {products.map((product, i) => {
              return <ProductCard key={i} product={product}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;