import clsx from "clsx";
import React, { FC, useState } from "react";
import styles from "./Checkbox.module.scss";

interface iCheckbox {
  title: string;
}

const Checkbox: FC<iCheckbox> = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={styles.label}>
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      <svg
        className={clsx(styles.checkbox, isChecked && styles.active)}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke="#fff" />
      </svg>
      <p className={styles.checkboxTitle}>{title}</p>
    </label>
  );
};

export default Checkbox;
