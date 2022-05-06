import React from 'react';
import styles from './Navbar.module.scss';
import {ReactComponent as ArrowDown} from './navSvg/arrowDown.svg';
import {ReactComponent as Present} from './navSvg/present.svg';
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <div className={`mainContainer ${styles.container}`}>
      <div className={styles.selectContainer}>
        <select>
          <option>shop by departments</option>
        </select>
        <ArrowDown className={styles.arrow}/>
      </div>
        <div className={styles.navigation}>
          <NavLink to='/' className={styles.link}>Home</NavLink>
          <NavLink to='/shop' className={styles.link}>Shop</NavLink>
          <NavLink to='/page' className={styles.link}>Page</NavLink>
          <NavLink to='/services' className={styles.link}>Services</NavLink>
          <NavLink to='/blog' className={styles.link}>Blog</NavLink>
          <NavLink to='/contact' className={styles.link}>Contact</NavLink>
          <NavLink to='/offers' className={styles.link}>Offers</NavLink>
        </div>
        <div className={styles.presentContainer}>
          <Present/>
          <span>Get your coupon code</span>
        </div>
    </div>
    </nav>
  );
};

export default Navbar;