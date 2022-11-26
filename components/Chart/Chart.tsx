import TableBox from "components/Table/TableBox";
import { tdChartData, thChartData } from "data/data";
import React, { FC } from "react";
import styles from "./Chart.module.scss";

interface ChartProps {}

const Chart: FC<ChartProps> = ({}) => {
  return (
    <div className={styles.chart}>
      <h2 className={styles.chartTitle}>
        Изменение уровня холестерина по годам
      </h2>
      <div className={styles.chartBox}>
        <div className={styles.chartGraph}></div>
        <div className={styles.chartTable}>
          <TableBox thData={thChartData} tdData={tdChartData} isInfo />
        </div>
      </div>
    </div>
  );
};

export default Chart;
