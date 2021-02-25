import React, { useCallback, useRef, useState } from "react";
import { isError, useQuery } from "react-query";
import { getFiveDayForecast } from "../api/api";
import { Button } from "../components/button";
import { Form, FormField, Input } from "../components/form";
import { Loader } from "../components/loader";
import { FIVE_DAY_FORECAST_QUERY } from "../constants";
import ForecastStats from "../containers/forecase-stats";
import ForecastTable from "../containers/forecast-table";

const HomePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const lastSearchValue = useRef("");

  const { data, isFetching, error, refetch } = useQuery(
    `${FIVE_DAY_FORECAST_QUERY}-${lastSearchValue.current}`,
    () => getFiveDayForecast(lastSearchValue.current),
    {
      refetchOnWindowFocus: false,
      enabled: lastSearchValue.current.length > 0,
      retry: false,
    }
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      lastSearchValue.current = searchValue;
      refetch();
    },
    [searchValue, refetch]
  );

  return (
    <div className="bg-gray-100  min-h-screen overflow-auto">
      <div className="container mx-auto px-4">
        <div className="px-4 py-10">
          <Loader isVisible={isFetching} />
          <div style={{ marginBottom: "20px" }}>
            <Form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <FormField htmlFor="search" labelText="Search" className="mr-2">
                  <Input
                    id="search"
                    placeholder="Type city..."
                    className="pr-2"
                    onChange={handleInputChange}
                    value={searchValue}
                  />
                </FormField>
                <Button type="submit">Search</Button>
              </div>
            </Form>
          </div>

          {!data && !error && !isFetching && (
            <div className="text-center">
              <p className="text-gray-400">Type city to get weather</p>
            </div>
          )}

          {data && (
            <div>
              <ForecastTable data={data} />
              <ForecastStats data={data} />
            </div>
          )}

          {error && isError(error) && (
            <div className="text-center">
              <p className="text-red-400">Error: {error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
