const forecastApiData = {
  list: [
    {
      dt: 1614211200,
      main: {
        temp: 7.38,
        feels_like: 4.32,
        temp_min: 7.38,
        temp_max: 8.53,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1017,
        humidity: 69,
        temp_kf: -1.15,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
    },
    {
      dt: 1614222000,
      main: {
        temp: 7.19,
        feels_like: 4.77,
        temp_min: 7.19,
        temp_max: 7.44,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1016,
        humidity: 68,
        temp_kf: -0.25,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
    },
    {
      dt: 1614276000,
      main: {
        temp: 10.35,
        feels_like: 7.06,
        temp_min: 10.35,
        temp_max: 10.35,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1013,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 3.13, deg: 235 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2021-02-25 18:00:00",
    },
    {
      dt: 1614286800,
      main: {
        temp: 9.09,
        feels_like: 5.94,
        temp_min: 9.09,
        temp_max: 9.09,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1014,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.7, deg: 258 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2021-02-25 21:00:00",
    },
    {
      dt: 1614297600,
      main: {
        temp: 7.99,
        feels_like: 4.84,
        temp_min: 7.99,
        temp_max: 7.99,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1014,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.62, deg: 260 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2021-02-26 00:00:00",
    },
    {
      dt: 1614308400,
      main: {
        temp: 6.98,
        feels_like: 3.86,
        temp_min: 6.98,
        temp_max: 6.98,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1014,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.75, deg: 280 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2021-02-26 03:00:00",
    },
    {
      dt: 1614319200,
      main: {
        temp: 6.07,
        feels_like: 3.25,
        temp_min: 6.07,
        temp_max: 6.07,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1014,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 0 },
      wind: { speed: 2.39, deg: 286 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2021-02-26 06:00:00",
    },
    {
      dt: 1614330000,
      main: {
        temp: 9.73,
        feels_like: 7.23,
        temp_min: 9.73,
        temp_max: 9.73,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1014,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 48 },
      wind: { speed: 2.62, deg: 311 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2021-02-26 09:00:00",
    },
  ],
  city: {
    id: 3081368,
    name: "Wrocław",
    country: "PL",
    timezone: 3600,
    sunrise: 1614231905,
    sunset: 1614270306,
  },
};

export default forecastApiData;
