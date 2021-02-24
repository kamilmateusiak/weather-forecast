import React from "react";
import styles from "./table.module.scss";

const TableRow: React.FC = ({ children }) => {
  return <tr className={styles.row}>{children}</tr>;
};

export default TableRow;
