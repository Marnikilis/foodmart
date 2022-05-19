import React from 'react';
//@ts-ignore
import styles from './Drawer.module.scss';
import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop/Backdrop";
import { ReactComponent as Search } from "../header-icons/search.svg";
import { ReactComponent as Phone } from "../header-icons/phone.svg";
import { ReactComponent as User } from "../header-icons/user.svg";


interface DrawerType {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({isOpen, onClose}: DrawerType) => {

  const cls = [styles.drawer];
  if (!isOpen) {
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
          <NavLink to='/' className={styles.link}>Shop</NavLink>
          <NavLink to='/' className={styles.link}>Page</NavLink>
          <NavLink to='/' className={styles.link}>Services</NavLink>
          <NavLink to='/' className={styles.link}>Blog</NavLink>
          <NavLink to='/' className={styles.link}>Contact</NavLink>
          <NavLink to='/offers' className={styles.link}>Offers</NavLink>
        </div>
      </div>
      {isOpen && <Backdrop onClick={onClose}/>}
    </>
  );
};

export default Drawer;