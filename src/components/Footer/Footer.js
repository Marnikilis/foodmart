import React from 'react';
import styles from './Footer.module.scss';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as Facebook} from './footerSvg/facebook.svg';
import {ReactComponent as Twitter} from './footerSvg/twitter.svg';
import {ReactComponent as Pinterest} from './footerSvg/pinterest.svg';
import {ReactComponent as Instagram} from './footerSvg/instagram.svg';
import {ReactComponent as YouTube} from './footerSvg/youtube.svg';
import {ReactComponent as Arrow} from './footerSvg/sendArrow.svg';
import leaves from '../../images/leaves1.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <img src={leaves} className={styles.leaves}/>
        <div className={styles.firstFooterContainer}>
        <div className={styles.iconsContainer}>
          <Logo/>
          <div className={styles.social}>
            <div className={styles.iconContainer}><Facebook/></div>
            <div className={styles.iconContainer}><Twitter/></div>
            <div className={styles.iconContainer}><Pinterest/></div>
            <div className={styles.iconContainer}><Instagram/></div>
            <div className={styles.iconContainer}><YouTube/></div>
          </div>
        </div>
        <div>
          <span>ouick links</span>
          <NavLink to='/' className={styles.link}>Home</NavLink>
          <NavLink to='/' className={styles.link}>About us</NavLink>
          <NavLink to='/' className={styles.link}>Offers</NavLink>
          <NavLink to='/' className={styles.link}>Services</NavLink>
          <NavLink to='/' className={styles.link}>Contact us</NavLink>
        </div>
        <div>
          <span>About</span>
          <NavLink to='/' className={styles.link}>How it work</NavLink>
          <NavLink to='/' className={styles.link}>our packages</NavLink>
          <NavLink to='/' className={styles.link}>promotions</NavLink>
          <NavLink to='/' className={styles.link}> refer a friend</NavLink>
        </div>
        <div>
          <span>Help Centre</span>
          <NavLink to='/' className={styles.link}>Payments</NavLink>
          <NavLink to='/' className={styles.link}>Shipping</NavLink>
          <NavLink to='/' className={styles.link}>Product returns</NavLink>
          <NavLink to='/' className={styles.link}>FAQs</NavLink>
          <NavLink to='/' className={styles.link}>Checkout</NavLink>
          <NavLink to='/' className={styles.link}>other Issues</NavLink>
        </div>
        <div>
          <span>Our newsletter</span>
          <div className={styles.subscribeContainer}>
            <div>Subscribe to our newsletter to get updates<br/> about our grand offers.</div>
            <div className={styles.inputContainer}>
              <input placeholder='Enter your email-address'/>
              <button className={`blackBtn ${styles.sendBtn}`}>
                Send
                <Arrow/>
              </button>
            </div>
          </div>
        </div>
        </div>
      <div className={styles.copyrightContainer}>
        <div> © 2022 TemplatesJungle. All rights reserved.</div>
        <div>Design by <span>TemplatesJungle</span></div>
      </div>
      </div>
    </div>
  );
};

export default Footer;