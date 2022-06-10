import React from "react";
import { ReactComponent as ArrowRight } from "../Category/categorySvg/smallArrow.svg";
import fruits from "./articlesImg/fruits.png";
import veg from "./articlesImg/veg.png";
import cashew from "./articlesImg/cashew.png";
import Article from "./AtricleCard/Article";
//@ts-ignore
import styles from "./Aticles.module.scss";

const articles = [
  {
    img: fruits,
    data: "12 jan, 2021",
    time: "15 min",
    title: "Right way to preserve the fruits & other organics",
  },
  {
    img: veg,
    data: "12 jan, 2021",
    time: "15 min",
    title: "How to maintain the freshness of vegetables",
  },
  {
    img: cashew,
    data: "12 jan, 2021",
    time: "15 min",
    title: "Right way to preserve the fruits & other organics",
  },
];
const Articles = () => {
  return (
    <div className={"mainContainer"}>
      <div className={styles.container}>
        <div className={"headingContainer"}>
          <div className={"firstHeadingContainer"}>
            <div className={"heading"}>our latest articles</div>
            <button className={"btnAll"}>
              <div className={"btnText"}>Read all articles</div>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.articlesContainer}>
          {articles.map((article, i) => {
            return <Article key={i} content={article} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
