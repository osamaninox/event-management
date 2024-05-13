import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout';
import SearchInput from '../components/common/SearchInput';
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import {
  Income,
  Customers,
  Sales,
  Tickets,
  MonthlySale,
  FirstChart,
} from "../api/ChartData";
import Button from '../components/common/Button';
import Checkbox from '../components/common/Checkbox';
import { AvatarDefault } from "../components/common/Avatar";
import face from "../../../assets/dashboard/images/face-2.jpg";
import { Table } from '../components/common/Table';
import { Link } from 'react-router-dom';

const Home = () => {
  const incomeData = {
      labels: Income.years.map((year) => year),
      datasets: [
        {
          label: "sale",
          data: Income.data.sales.map((sale) => sale),
          backgroundColor: ["rgba(254,31,111,1)", "rgba(212,218,228,1)"],
          borderRadius: 4,
          barThickness: 12,
        },
      ],
  };
  const firstChart = {
    labels: FirstChart.months.map((month) => month),
    datasets: [
      {
        label: "publish",
        data: FirstChart.data.publish.map((publish) => publish),
        fill: true,
        backgroundColor: "rgba(255,1,94,0.1)",
        borderColor: "rgba(255,1,94,1)",
        pointStyle: "round",
        borderWidth: 3,
        showLine: true,
        pointRadius: 1,
      },
    ],
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: true,
            color: "rgba(243,244,246,1)",
            lineWidth: 1,
            drawTicks: false,
            borderDash: [5, 5],
          },
          min: 8,
          max: 20,
          ticks: {
            stepSize: 2,
          },
        },
      },
    },
  };
  const overviewChartOptions = {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          display: true,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
  };

  const TABLE_HEAD = ["id", "name", "Amount", "Payment Channel", "status","date"];

  const TABLE_ROWS = [
    {
      id: "1",
      name: "John Michael",
      Amount: "$50.00",
      Payment_Channel: "Credit Card",
      Status: "Completed",
      date: "23/04/18",
      success: "true",
      pending: "false",
    },
    {
      id: "2",
      name: "John Michael",
      Amount: "$50.00",
      Payment_Channel: "Credit Card",
      Status: "Pending",
      date: "23/04/18",
      sucess: "false",
    },
    {
      id: "3",
      name: "John Michael",
      Amount: "$25.00",
      Payment_Channel: "Credit Card",
      Status: "Pending",
      date: "23/04/18",
      sucess: "false",
    },
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4 mb-[20px]">
          <div className="bg-[#fff] shadow-md rounded-md px-[20px] py-[10px]">
            <h6 className="text-[#6b7280] font-[500] text-[14px] font-poppins uppercase">
              monthly Income
            </h6>
            <h3 className="text-[#000000] text-[20px]  font-[600] font-poppins uppercase">
              $2350
            </h3>
            <div className="montly_chart">
              <BarChart
                chartData={incomeData}
                chartOptions={overviewChartOptions}
              />
            </div>
          </div>
          <div className="bg-[#fff] shadow-md rounded-md px-[20px] py-[10px]">
            <h6 className="text-[#6b7280] font-[500] text-[14px] font-poppins uppercase">
              monthly Customers
            </h6>
            <h3 className="text-[#000000] text-[20px]  font-[600] font-poppins uppercase">
              5264+
            </h3>
            <div className="montly_chart">
              <BarChart
                chartData={incomeData}
                chartOptions={overviewChartOptions}
              />
            </div>
          </div>
          <div className="bg-[#fff] shadow-md rounded-md px-[20px] py-[10px]">
            <h6 className="text-[#6b7280] font-[500] text-[14px] font-poppins uppercase">
              Total Sale
            </h6>
            <h3 className="text-[#000000] text-[20px]  font-[600] font-poppins uppercase">
              $1536
            </h3>
            <div className="montly_chart">
              <BarChart
                chartData={incomeData}
                chartOptions={overviewChartOptions}
              />
            </div>
          </div>
          <div className="bg-[#fff] shadow-md rounded-md px-[20px] py-[10px]">
            <h6 className="text-[#6b7280] font-[500] text-[14px] font-poppins uppercase">
              Total Events
            </h6>
            <h3 className="text-[#000000] text-[20px]  font-[600] font-poppins uppercase">
              5012
            </h3>
            <div className="montly_chart">
              <BarChart
                chartData={incomeData}
                chartOptions={overviewChartOptions}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <div className="bg-[#fff] shadow-md rounded-md px-[20px] py-[10px]">
              <div className="flex justify-between items-center py-[1 0px]">
                <h2 className="text-[#000] text-[16px] font-[600]">
                  This Month Sale
                </h2>
                <div className="flex">
                  <Button label="Months" className="sm" />
                  <Button label="week" className="sm" />
                  <Button label="Per day" className="sm" />
                </div>
              </div>
              <div className="fisrtChart h-[350px] w-full py-[20px]">
                <LineChart
                  chartData={firstChart}
                  chartOptions={firstChart.options}
                />
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="bg-[#ffffff] p-[25px] rounded shadow-xl">
          <div className="flex justify-between items-center pb-[20px]">
            <h2 className="text-[#000] text-[16px] font-[600]">
              Latest Transactions
            </h2>
           <Link to="/dashboard/transactions">
              <Button size="md" label="View All"></Button>
           </Link>
          </div>
          <Table head={TABLE_HEAD} rows={TABLE_ROWS} />
        </div>
      </div>
    </>
  );
}

export default Home