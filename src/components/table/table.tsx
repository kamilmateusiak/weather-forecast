import React from "react";
import cx from "classnames";
import styles from "./table.module.scss";

const Table: React.FC = ({ children }) => {
  return <table className={cx("table-fixed", styles.table)}>{children}</table>;
};

export default Table;
