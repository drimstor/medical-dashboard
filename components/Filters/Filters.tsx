import { materialArray, testArray, yearArray } from "data/data";
import React from "react";
import FiltersButton from "ui-kit/Buttons/FiltersButton";
import styles from "./Filters.module.scss";
import FiltersList from "./FiltersList";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <FiltersList title="Выберите материал" items={materialArray} />
      <FiltersList title="Выберите анализ" items={testArray} />
      <FiltersList title="Выберите год исследования" items={yearArray} />
      <div className={styles.filtersButtons}>
        <FiltersButton title="Скрыть фильтры" />
        <FiltersButton title="Сбросить фильтры" />
      </div>
    </div>
  );
};

export default Filters;
