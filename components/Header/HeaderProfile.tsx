import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import avatar from "public/images/avatar.svg";

const HeaderProfile = () => {
  return (
    <div className={styles.headerProfile}>
      <p className={styles.headerName}>Иван Иванов</p>
      <div className={styles.headerAvatar}>
        <Image src={avatar} width="31" height="31" alt="avatar" />
      </div>
    </div>
  );
};

export default HeaderProfile;
