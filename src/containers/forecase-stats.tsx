import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadItem,
  TableRow,
} from "../components/table";
import { ForecastModel } from "../models/forecast";

interface Props {
  data: ForecastModel;
}

const ForecastStats: React.FC<Props> = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadItem width="33%">Minimum temp.</TableHeadItem>
        <TableHeadItem width="33%">Maximum temp.</TableHeadItem>
        <TableHeadItem width="33%">Mean temp.</TableHeadItem>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell data-label="Minimum temp.">
            {data.minimumTemp}&#8451;
          </TableCell>
          <TableCell data-label="Maximum temp.">
            {data.maximumTemp}&#8451;
          </TableCell>
          <TableCell data-label="Mean temp.">{data.meanTemp}&#8451;</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ForecastStats;
