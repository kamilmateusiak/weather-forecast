import React from "react";
import styles from "./weather-icon.module.scss";

const baseUrl = "http://openweathermap.org/img/wn";

interface Props {
  iconName: string;
}

const WeatherIcon: React.FC<Props> = ({ iconName }) => {
  if (!baseUrl) {
    return null;
  }

  return (
    <img
      src={baseUrl + "/" + iconName + "@2x.png"}
      className={styles.icon}
      alt="Weather icon"
    />
  );
};

export default WeatherIcon;
