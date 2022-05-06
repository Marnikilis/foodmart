import React from 'react';
import styles from './Header.module.scss';
import {ReactComponent as Cart} from "./header-icons/cart.svg";
import {ReactComponent as ArrowDown} from "./header-icons/arrowDown.svg";
import {ReactComponent as Search} from "./header-icons/search.svg";
import {ReactComponent as Favorite} from "./header-icons/favorite.svg";
import {ReactComponent as User} from "./header-icons/user.svg";
import {ReactComponent as Logo} from '../../images/logo.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={`mainContainer ${styles.container}`}>
        <div className={styles.firstHeaderContainer}>
          <NavLink to='/'><Logo/></NavLink>
          <div className={styles.searchContainer}>
            <div className={styles.selectContainer}>
              <select>
                <option>All Categories</option>
              </select>
              <ArrowDown className={styles.arrow}/>
            </div>
            <div className={styles.searchInput}>
              <input placeholder='Search for more than 20,000 products'/>
              <Search/>
            </div>
          </div>
        </div>

        <div className={styles.secondHeaderContainer}>
          <div className={styles.supportContainer}>
            <div className={styles.captionText}>For support ?</div>
            <div className={styles.captionNumber}>+980-34984089</div>
          </div>
          <div className={styles.userContainer}>
            <User/>
            <Favorite/>
            <Cart/>
            <div className={styles.cartContainer}>
              <div className={styles.captionText}>your cart</div>
              <div className={styles.captionNumber}>$1290.00</div>
            </div>
          </div>
        </div>
        </div>
    </header>
  );
};

export default Header;