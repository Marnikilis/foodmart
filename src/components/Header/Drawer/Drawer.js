import React from 'react';
import styles from './Drawer.module.scss';
import {NavLink} from "react-router-dom";
import Backdrop from "./Backdrop/Backdrop";
import {ReactComponent as Search} from "../header-icons/search.svg";
import {ReactComponent as Phone} from "../header-icons/phone.svg";
import {ReactComponent as User} from "../header-icons/user.svg";

const Drawer = (props) => {

  const cls = [styles.drawer];
  if (!props.isOpen) {
    cls.push(styles.close)
  }

  return (
    <>
      <div className={cls.join(' ')}>
        <div className={styles.nav}>
          <div className={styles.info}>
            <a href="tel:+980-34984089">
              <Phone/>
            </a>
            <User/>
          </div>
          <div className={styles.searchInput}>
            <input placeholder='Search'/>
            <Search/>
          </div>
          <NavLink to='/' className={styles.link}>Home</NavLink>
          <NavLink to='/shop' className={styles.link}>Shop</NavLink>
          <NavLink to='/page' className={styles.link}>Page</NavLink>
          <NavLink to='/services' className={styles.link}>Services</NavLink>
          <NavLink to='/blog' className={styles.link}>Blog</NavLink>
          <NavLink to='/contact' className={styles.link}>Contact</NavLink>
          <NavLink to='/offers' className={styles.link}>Offers</NavLink>
        </div>
      </div>
      {props.isOpen && <Backdrop onClick={props.onClose}/>}
    </>
  );
};

export default Drawer;