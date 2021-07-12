import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const LineChart = () => {
  const repositories = useSelector((state) => state.placeholderData2);
  const completeData = repositories.reverse();
  completeData.splice(9);
  const tenWeeksData = completeData.map((repository) => repository.total);
  const tenWeeksLabel = completeData.map(
    (repository) => "Week:" + repository.week
  );
  const data = {
    labels: tenWeeksLabel,
    datasets: [
      {
        label: "# of Commits",
        data: tenWeeksData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <>
      <div className="chartContainer">
        <Line data={data} maintainAspectRatio={false} responsive={true} />
      </div>
    </>
  );
};

export default LineChart;
