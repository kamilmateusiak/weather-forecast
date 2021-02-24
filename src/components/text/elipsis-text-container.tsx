import React from "react";
import styles from "./text.module.scss";

const ElipsisTextContainer: React.FC = ({ children }) => {
  return <div className={styles["elipsis-text-container"]}>{children}</div>;
};

export default ElipsisTextContainer;
