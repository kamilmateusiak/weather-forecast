import React from "react";
import cx from "classnames";
import LoaderSpinner from "react-loader-spinner";
import styles from "./loader.module.scss";

const Loader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div
      className={cx(styles[`loader-overlay`], { [styles.visible]: isVisible })}
    >
      <LoaderSpinner
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
