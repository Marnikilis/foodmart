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
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/page'>Page</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/offers'>Offers</NavLink>
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