import * as React from "react";
import styles from "./form.module.scss";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<Props> = (props) => {
  return <form className={styles.form} {...props} />;
};

export default Form;
