import * as z from "zod";

export const ForecastSchema = z.object({
  city: z.object({
    id: z.number(),
    name: z.string(),
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
    timezone: z.number(),
  }),
  list: z.array(
    z.object({
      dt: z.number(),
      main: z.object({
        humidity: z.number(),
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
      }),
      weather: z.array(
        z.object({
          id: z.number(),
          main: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
    })
  ),
});

export const ForecastErrorSchema = z.object({
  cod: z.string(),
  message: z.string(),
});
