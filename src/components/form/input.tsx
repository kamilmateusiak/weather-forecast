import * as React from "react";
import cx from "classnames";
import styles from "./form.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: boolean;
}

const Input: React.FC<Props> = ({ error, className, ...restProps }) => {
  return (
    <input
      className={cx(
        styles.input,
        { [styles["input--error"]]: !!error },
        className
      )}
      {...restProps}
    />
  );
};

export default Input;
