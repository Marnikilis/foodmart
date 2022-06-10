import React from "react";
//@ts-ignore
import styles from "./Article.module.scss";
import { ReactComponent as Present } from "./atricleSvg/present.svg";
import { ReactComponent as Clock } from "./atricleSvg/clock.svg";

interface ArticleType {
  img: string;
  data: string;
  time: string;
  title: string;
}

const Article = ({ content }) => {
  const { img, data, time, title }: ArticleType = content;

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={styles.dataContainer}>
        <div>
          <Present />
          <span>{data}</span>
        </div>
        <div>
          <Clock />
          <span>{time}</span>
        </div>
      </div>
      <div className={styles.textContainer}>
        <span>{title}</span>
        Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend
        viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor
        morbi...
      </div>
    </div>
  );
};

export default Article;
