import React, { FC } from "react";
import styles from "components/Filters/Filters.module.scss";

interface iFiltersButton {
  title: string;
  onClick?: () => void;
}

const FiltersButton: FC<iFiltersButton> = ({ title, onClick }) => {
  return (
    <span className={styles.filtersButton} onClick={onClick}>
      {title}
    </span>
  );
};

export default FiltersButton;
