import React from "react";
import cx from "classnames";
import styles from "./button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "dangerous" | "basic";
  fullWidth?: boolean;
  children: string;
}

const Button: React.FC<Props> = ({
  buttonType = "primary",
  children,
  fullWidth,
  ...restProps
}) => {
  return (
    <button
      type="button"
      className={cx(styles.button, styles[`button--${buttonType}`], {
        [styles["full-width"]]: fullWidth,
      })}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
