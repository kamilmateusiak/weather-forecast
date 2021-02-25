import * as z from "zod";
import { ForecastSchema } from "../schemas/forecast";

export type ForecastAPIModel = z.infer<typeof ForecastSchema>;

export type ForecastModel = {
  city: {
    name: string;
    countryCode: string;
    id: number;
  };
  dataByDate: {
    [date: string]: {
      date: string;
      humidity: number[];
      humidityMedian: number;
      morning?: {
        icon: string;
        temperature: number;
      };
      day?: {
        icon: string;
        temperature: number;
      };
      night?: {
        icon: string;
        temperature: number;
      };
    };
  };
  dates: string[];
  minimumTemp: number;
  maximumTemp: number;
  meanTemp: number;
};
