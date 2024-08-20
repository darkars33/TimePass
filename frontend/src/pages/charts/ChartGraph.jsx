import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { Data } from "./Data";
import PeiChart from "./PeiChart"
import BarChart from "./BarChart";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

const ChartGraph = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "nothing",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "none"
      },
    ],
  });

  return <div>hello
          <PeiChart chartData={chartData} />
          <BarChart chartData={chartData} />
          <LineChart chartData={chartData} />
  </div>;
};

export default ChartGraph;
