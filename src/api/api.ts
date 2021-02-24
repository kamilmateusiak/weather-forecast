import axios from "axios";
import { ForecastErrorSchema, ForecastSchema } from "../schemas/forecast";
import { deserializeForecast } from "./serializers";

const BASE_URL = "https://api.openweathermap.org";
const apiRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

export const getFiveDayForecast = async (city: string) => {
  if (city.length === 0) {
    throw new Error("No search phrase");
  }

  try {
    const { data } = await apiRequest.get<unknown>(
      `/data/2.5/forecast?units=metric&q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );

    return deserializeForecast(ForecastSchema.parse(data));
  } catch (error) {
    if (error.response) {
      const parsedError = ForecastErrorSchema.parse(error.response.data);

      throw new Error(parsedError.message);
    }

    if (error.request) {
      throw new Error(error.request);
    }

    throw new Error(error.message);
  }
};
