import React from 'react';
import styles from './Services.module.scss';
import cart from './servicesSvg/cart.svg';
import secure from './servicesSvg/secure.svg';
import quality from './servicesSvg/quality.svg';
import savings from './servicesSvg/savings.svg';
import offers from './servicesSvg/offers.svg';
import bgDots from './servicesSvg/bgDots.svg';

const services = [{img: cart, title: 'Free delivery'},
  {img: secure, title: '100% secure payment'},
  {img: quality, title: 'Quality guarantee'},
  {img: savings, title: 'guaranteed savings'},
  {img: offers, title: 'Daily offers'},]

const Services = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <img src={bgDots} className={styles.bgDots} alt='bg'/>
        {services.map(service => {
          return (
            <div key={service.img} className={styles.serviceContainer}>
              <img src={service.img} alt={service.title}/>
              <div>
                <span>{service.title}</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipi elit.</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Services;