import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.scss";
import sidebarIcon1 from "public/images/sidebarIcon1.svg";
import sidebarIcon2 from "public/images/sidebarIcon2.svg";
import sidebarIcon3 from "public/images/sidebarIcon3.svg";
import sidebarIcon4 from "public/images/sidebarIcon4.svg";

const iconsArray = [sidebarIcon1, sidebarIcon2, sidebarIcon3, sidebarIcon4];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {iconsArray.map((icon, index) => (
        <Link href={"/"} key={`${index}_${icon}`}>
          <div className={styles.sidebarIcon}>
            <Image src={icon} width="50" height="50" alt="sidebarIcon" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
