import { tdData, thData } from "data/data";
import React from "react";
import styles from "./Table.module.scss";
import TableBox from "./TableBox";

const Table = () => {
  return (
    <div className={styles.table}>
      <TableBox
        title="Липидная панель (2005 год)"
        thData={thData}
        tdData={tdData}
      />
      <TableBox
        title="Липидная панель (2003 год)"
        thData={thData}
        tdData={tdData}
      />
      <TableBox
        title="Липидная панель (2000 год)"
        thData={thData}
        tdData={tdData}
      />
    </div>
  );
};

export default Table;
