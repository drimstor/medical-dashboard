import React, { FC } from "react";
import clsx from "clsx";
import styles from "components/Table/Table.module.scss";

interface iCircleIcon {
  item: string;
}

const CircleIcon: FC<iCircleIcon> = ({ item }) => {
  return (
    <span
      className={clsx(
        styles.circle,
        item.includes("в норме") && styles.green,
        item.includes("выше нормы") && styles.red
      )}
    />
  );
};

export default CircleIcon;
