import React from "react";
import styles from "./table.module.scss";

interface Props {
  width: string;
}

const TableHeadItem: React.FC<Props> = ({ children, width }) => {
  return (
    <th className={styles["head-item"]} style={{ width }}>
      {children}
    </th>
  );
};

export default TableHeadItem;
