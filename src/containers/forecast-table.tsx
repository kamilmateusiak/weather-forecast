import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadItem,
  TableRow,
} from "../components/table";
import { ElipsisTextContainer } from "../components/text";
import { WeatherIcon } from "../components/weather-icon";
import { ForecastModel } from "../models/forecast";

interface Props {
  data: ForecastModel;
}

const ForecastTable: React.FC<Props> = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadItem width="20%">Date</TableHeadItem>
        <TableHeadItem width="20%">Morning temp.</TableHeadItem>
        <TableHeadItem width="20%">Day temp.</TableHeadItem>
        <TableHeadItem width="20%">Night temp.</TableHeadItem>
        <TableHeadItem width="20%">Humidity</TableHeadItem>
      </TableHead>
      <TableBody>
        {data.dates.map((date) => {
          const dayData = data.dataByDate[date];
          return (
            <TableRow key={date}>
              <TableCell bolded centerOnMobile>
                {date}
              </TableCell>
              <TableCell data-label="Morning temp.">
                {dayData.morning ? (
                  <>
                    <WeatherIcon iconName={dayData.morning.icon} />
                    <ElipsisTextContainer>
                      {dayData.morning.temperature}&#8451;
                    </ElipsisTextContainer>
                  </>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell data-label="Day temp.">
                {dayData.day ? (
                  <>
                    <WeatherIcon iconName={dayData.day.icon} />
                    <ElipsisTextContainer>
                      {dayData.day.temperature}&#8451;
                    </ElipsisTextContainer>
                  </>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell data-label="Night temp.">
                {dayData.night ? (
                  <>
                    <WeatherIcon iconName={dayData.night.icon} />
                    <ElipsisTextContainer>
                      {dayData.night.temperature}&#8451;
                    </ElipsisTextContainer>
                  </>
                ) : (
                  "-"
                )}
              </TableCell>

              <TableCell data-label="Morning temp.">
                <>
                  <ElipsisTextContainer>
                    {dayData.humidityMedian}%
                  </ElipsisTextContainer>
                </>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ForecastTable;
