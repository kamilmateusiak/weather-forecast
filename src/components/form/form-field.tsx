import * as React from "react";
import cx from "classnames";
import styles from "./form.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  labelText: string;
  htmlFor: string;
  error?: string;
}

const FormField: React.FC<Props> = ({
  children,
  className,
  labelText,
  htmlFor,
  error,
}) => {
  return (
    <div className={cx(styles.field, className)}>
      {labelText && (
        <label className={styles.label} htmlFor={htmlFor}>
          {labelText}
        </label>
      )}
      <div>
        {children}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
};

export default FormField;
