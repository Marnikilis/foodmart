import React, { useRef } from "react";
//@ts-ignore
import styles from "./Brands.module.scss";
import { ReactComponent as ArrowRight } from "../Category/categorySvg/smallArrow.svg";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import honey from "./brandsImg/honey.png";
import herb from "./brandsImg/herb.png";
import tuna from "./brandsImg/tuna.png";
import hotz from "./brandsImg/hotz.png";
import BrandCard from "./BrandCard/BrandCard";
import { useCarousel } from "../../hooks/useCarousel";

const brands = [
  {
    img: honey,
    caption: "Honey best nectar you wish to get",
    title: "Amber Jar",
  },
  {
    img: herb,
    caption: "Pure herb the only natural brand",
    title: "Pure Herb",
  },
  { img: tuna, caption: "Where's tuna? Tuna, clear choice!", title: "Tuna" },
  { img: hotz, caption: "the one junk food that’s natural", title: "Hotz" },
  {
    img: honey,
    caption: "Honey best nectar you wish to get",
    title: "Amber Jar",
  },
  {
    img: herb,
    caption: "Pure herb the only natural brand",
    title: "Pure Herb",
  },
  { img: tuna, caption: "Where's tuna? Tuna, clear choice!", title: "Tuna" },
  { img: hotz, caption: "the one junk food that’s natural", title: "Hotz" },
];

const Brands = () => {
  const brandsRef = useRef();
  const carouselRef = useRef();

  const {
    nextCardHandler,
    prevCardHandler,
    onTouchEndHandler,
    onTouchStartHandler,
    nextDisabled,
    prevDisabled,
  } = useCarousel({ items: brands, ref: brandsRef, slider: carouselRef });

  return (
    <div className={"mainContainer"}>
      <div className={styles.container}>
        <div className={"headingContainer"}>
          <div className={"firstHeadingContainer"}>
            <div className={"heading"}>Newly Arrived Brands</div>
            <button className={"btnAll"}>
              <div className={"btnText"}>view all offers</div>
              <ArrowRight />
            </button>
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
          <div ref={brandsRef} className={styles.brandCards}>
            {brands.map((brand, i) => {
              return (
                <BrandCard
                  key={i}
                  img={brand.img}
                  title={brand.title}
                  caption={brand.caption}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
