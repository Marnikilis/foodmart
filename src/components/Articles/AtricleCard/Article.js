import React from 'react';
import styles from './Article.module.scss';
import {ReactComponent as Present} from './atricleSvg/present.svg';
import {ReactComponent as Clock} from './atricleSvg/clock.svg';

const Article = ({content}) => {
  return (
    <div className={styles.container}>
      <img src={content.img} alt={content.title}/>
      <div className={styles.dataContainer}>
      <div> <Present/> <span>{content.data}</span> </div>
        <div><Clock/> <span>{content.time}</span></div>
      </div>
      <div className={styles.textContainer}>
       <span>{content.title}</span>
      Lorem ipsum dolor sit amet, consectetur
      adipi elit. Aliquet eleifend viverra enim
      tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...
      </div>
    </div>
  );
};

export default Article;