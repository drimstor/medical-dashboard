import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import React, { FC } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <div className={styles.layoutBox}>
        {!!title && <h1 className={styles.layoutTitle}>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Layout;
