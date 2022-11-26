import { navItems } from "data/data";
import React from "react";
import styles from "./Header.module.scss";

const HeaderNav = () => {
  return (
    <ul className={styles.headerNav}>
      {navItems.map((item, index) => (
        <li key={`${index}_${item}`}>{item}</li>
      ))}
      <span className={styles.headerBurgerButton} />
    </ul>
  );
};

export default HeaderNav;
