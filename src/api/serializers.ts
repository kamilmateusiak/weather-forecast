import { formatISO, getHours } from "date-fns";
import calculateAverageValue from "../helpers/calculate-average-value";
import calculateMedian from "../helpers/calculate-median";
import { ForecastAPIModel, ForecastModel } from "../models/forecast";

export function deserializeForecast(data: ForecastAPIModel): ForecastModel {
  const dates: ForecastModel["dates"] = [];
  const dataByDate: ForecastModel["dataByDate"] = {};
  const timezoneTimeDifferenceInHours = data.city.timezone / 3600;
  const temperaturesCollection: number[] = [];
  let minimumTemp: number | undefined = void 0;
  let maximumTemp: number | undefined = void 0;

  data.list.forEach((hourData) => {
    const timestampInMs = hourData.dt * 1000;
    const date = formatISO(timestampInMs, { representation: "date" });
    const hour = getHours(hourData.dt * 1000) - timezoneTimeDifferenceInHours;

    if (!dataByDate[date]) {
      dataByDate[date] = {
        date,
        humidity: [],
        humidityMedian: 0,
      };
      dates.push(date);
    }

    dataByDate[date].humidity.push(hourData.main.humidity);

    // morning: 9am
    if (hour === 9) {
      dataByDate[date].morning = {
        temperature: Math.round(hourData.main.temp),
        icon: hourData.weather[0].icon,
      };
    }

    // day: 3pm
    if (hour === 15) {
      dataByDate[date].day = {
        temperature: Math.round(hourData.main.temp),
        icon: hourData.weather[0].icon,
      };
    }

    // night: 9pm
    if (hour === 21) {
      dataByDate[date].night = {
        temperature: Math.round(hourData.main.temp),
        icon: hourData.weather[0].icon,
      };
    }

    if (!minimumTemp || minimumTemp > Math.round(hourData.main.temp)) {
      minimumTemp = Math.round(hourData.main.temp);
    }

    if (!maximumTemp || maximumTemp < Math.round(hourData.main.temp)) {
      maximumTemp = Math.round(hourData.main.temp);
    }

    temperaturesCollection.push(hourData.main.temp);
  });

  dates.forEach((date) => {
    const median = calculateMedian(dataByDate[date].humidity);
    dataByDate[date].humidityMedian = Math.round(median);
  });

  return {
    city: {
      id: data.city.id,
      name: data.city.name,
      countryCode: data.city.country,
    },
    dataByDate,
    dates,
    minimumTemp: minimumTemp || 0,
    maximumTemp: maximumTemp || 0,
    meanTemp: calculateAverageValue(temperaturesCollection, 0),
  };
}
