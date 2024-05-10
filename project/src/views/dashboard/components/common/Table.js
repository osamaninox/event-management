import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import Badge from "./Badge";


export function Table({head, rows}) {
  return (
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left rounded-t-sm">
        <thead className="">
          <tr>
            {head.map((thead) => (
              <th
                key={thead}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 capitalize"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {thead}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(
            ({ id, name, Amount, date, Status, Payment_Channel,success }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Amount}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Payment_Channel}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <Badge
                      label={Status}
                      className={Status}
                      variant={success ? 'success' : 'pending'}
                    />
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {date}
                  </Typography>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}
