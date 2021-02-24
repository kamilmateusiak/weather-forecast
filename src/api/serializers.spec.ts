import forecastApiData from "../mocks/forecast-api-data";
import { deserializeForecast } from "./serializers";

it("deserializeForecast should return", () => {
  const expectedResult = {
    city: { countryCode: "PL", id: 3081368, name: "Wrocław" },
    dataByDate: {
      "2021-02-25": {
        date: "2021-02-25",
        humidity: [68, 69, 70, 72],
        humidityMedian: 70,
        night: {
          icon: "01n",
          temperature: 9,
        },
      },
      "2021-02-26": {
        date: "2021-02-26",
        humidity: [76, 84, 85, 92],
        humidityMedian: 85,
        morning: {
          icon: "03d",
          temperature: 10,
        },
      },
    },
    dates: ["2021-02-25", "2021-02-26"],
  };

  expect(deserializeForecast(forecastApiData)).toEqual(expectedResult);
});
