import React from 'react';
//@ts-ignore
import styles from './MenuToggle.module.scss';


interface MenuType {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuToggle = ({isOpen, onToggle}: MenuType): JSX.Element => {
  const cls = [styles.menuToggle];

  if (isOpen) {
    cls.push(styles.open)
    cls.push(styles.menuClose)
  } else {
    cls.push(styles.menuOpen)
  }

  return (
    <div
      className={cls.join(' ')}
      onClick={onToggle}
    />
  );
};

export default MenuToggle;