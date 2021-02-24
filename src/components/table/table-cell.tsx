import React from "react";
import cx from "classnames";
import styles from "./table.module.scss";

interface Props extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  bolded?: boolean;
  centerOnMobile?: boolean;
}

const TableCell: React.FC<Props> = ({
  children,
  bolded,
  className,
  centerOnMobile,
  ...restProps
}) => {
  return (
    <td
      className={cx(styles.cell, { [styles["cell--bold"]]: bolded }, className)}
      {...restProps}
    >
      <div
        className={cx(
          "flex flex-row items-center justify-end md:justify-center",
          {
            "justify-center": centerOnMobile,
          }
        )}
      >
        {children}
      </div>
    </td>
  );
};

export default TableCell;
