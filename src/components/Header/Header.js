import React, {useState} from 'react';
import styles from './Header.module.scss';
import {ReactComponent as Cart} from "./header-icons/cart.svg";
import {ReactComponent as ArrowDown} from "./header-icons/arrowDown.svg";
import {ReactComponent as Search} from "./header-icons/search.svg";
import {ReactComponent as Favorite} from "./header-icons/favorite.svg";
import {ReactComponent as User} from "./header-icons/user.svg";
import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as Phone} from './header-icons/phone.svg';
import {NavLink} from "react-router-dom";
import {ReactComponent as Present} from "./navSvg/present.svg";
import MenuToggle from "./MenuToggle/MenuToggle";
import Drawer from "./Drawer/Drawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenuHandler = () => {
    setIsOpen(prevState => !prevState)
  }
  const menuCloseHandler = () => {
    setIsOpen(false)
  }

  return (
    <header>
      {/*<a href='#close' className={styles.backdrop}/>*/}
      <div className={`mainContainer ${styles.container}`}>
        <div className={styles.headerContainer}>
          <div className={styles.firstHeaderContainer}>
            <NavLink to='/'>
              <Logo/>
            </NavLink>
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
            <div className={styles.phone}>
              <a href="tel:+980-34984089">
                <Phone/>
              </a>
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
        <nav>
          <div className={styles.firstNavContainer}>
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
          </div>
          <div className={styles.secondNavContainer}>
            <div className={styles.presentContainer}>
              <Present/>
              <span>Get your coupon code</span>
            </div>
            <MenuToggle onToggle={toggleMenuHandler} isOpen={isOpen}/>
            <Drawer isOpen={isOpen} onClose={menuCloseHandler}/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;