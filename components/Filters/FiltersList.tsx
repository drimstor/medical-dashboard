import React, { FC } from "react";
import Checkbox from "ui-kit/Checkbox/Checkbox";
import styles from "./Filters.module.scss";

interface FiltersListProps {
  items: string[];
  title: string;
}

const FiltersList: FC<FiltersListProps> = ({ items, title }) => {
  return (
    <div className={styles.filtersList}>
      <h2 className={styles.filtersTitle}>{title}</h2>
      <div className={styles.filtersBox}>
        {items.map((item, index) => (
          <Checkbox title={item} key={`${index}_${item}`} />
        ))}
      </div>
    </div>
  );
};

export default FiltersList;
