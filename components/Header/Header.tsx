import React from "react";
import styles from "./Header.module.scss";
import HeaderProfile from "./HeaderProfile";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderNav />
      <HeaderProfile />
    </header>
  );
};

export default Header;
