import clsx from "clsx";
import React, { FC } from "react";
import CircleIcon from "ui-kit/Icons/CircleIcon";
import InfoIcon from "ui-kit/Icons/InfoIcon";
import styles from "./Table.module.scss";

interface TableBoxProps {
  title?: string;
  thData: string[];
  tdData: string[][];
  isInfo?: boolean;
}

const TableBox: FC<TableBoxProps> = ({ title, thData, tdData, isInfo }) => {
  return (
    <table className={styles.tableGridContainer}>
      {!!title && (
        <caption>
          <h2 className={styles.tableTitle}>{title}</h2>
        </caption>
      )}
      <thead>
        <tr>
          {thData.map((value, index) => (
            <th key={`${value}_${index}`}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tdData.map((arr, index) => (
          <tr
            key={index}
            className={clsx(
              arr.includes("выше нормы") && styles.active,
              isInfo && styles.active
            )}
          >
            {arr.map((item, index) => (
              <td key={`${item}_${index}`}>
                <CircleIcon item={item} />
                {item}
                {!isInfo && index === 0 && <InfoIcon />}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableBox;
