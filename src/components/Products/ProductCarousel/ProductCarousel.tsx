import React, { useRef } from "react";
import { useCarousel } from "../../../hooks/useCarousel";
//@ts-ignore
import styles from "../Products.module.scss";
import { ReactComponent as Clock } from "../TopProducts/topProductsImg/clock.svg";
import { ReactComponent as Arrow } from "../../../images/arrow.svg";
import ProductCard from "../ProductCard/ProductCard";

interface Product {
  products: any;
  heading: string;
  expire?: string;
}

const ProductCarousel = ({ products, heading, expire }: Product) => {
  const productsRef = useRef();
  const carouselRef = useRef();

  const {
    nextCardHandler,
    prevCardHandler,
    onTouchEndHandler,
    onTouchStartHandler,
    nextDisabled,
    prevDisabled,
  } = useCarousel({ items: products, ref: productsRef, slider: carouselRef });

  return (
    <div className={"mainContainer"}>
      <div className={styles.container}>
        <div className={"headingContainer"}>
          <div className={"heading"}>{heading}</div>
          <div
            className={styles.expiresContainer}
            style={{ padding: expire ? "5px 10px" : "0" }}
          >
            <Clock style={{ display: expire ? "flex" : "none" }} />
            {expire}
          </div>
          <div className={"buttons"}>
            <button
              disabled={prevDisabled}
              onClick={prevCardHandler}
              className={"arrowBtn"}
            >
              <Arrow className={"prevBtn"} />
            </button>
            <button
              disabled={nextDisabled}
              onClick={nextCardHandler}
              className={"arrowBtn"}
            >
              <Arrow />
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          onTouchStart={onTouchStartHandler}
          onTouchEnd={onTouchEndHandler}
          className={styles.carouselContainer}
        >
          <div ref={productsRef} className={styles.productsContainer}>
            {products.map((product, i) => {
              return <ProductCard key={i} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
