import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Dropdown from "./select";

export default () => {
  const repositories = useSelector((state) => state.placeholderData);
  const top20RepositoriesLabels = repositories?.items.map(
    (repository) => repository.name
  );
  const top20RepositoriesData = repositories?.items.map(
    (repository) => repository.stargazers_count
  );

  const data = {
    labels: top20RepositoriesLabels,
    datasets: [
      {
        label: "# of Stars",
        data: top20RepositoriesData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = [
    { label: "All", value: "q=stars:>1&page=1&per_page=20" },
    {
      label: "Javascript",
      value: "q=language:javascript&stars:>1&page=1&per_page=20",
    },
    { label: "Go", value: "q=language:go&stars:>1&page=1&per_page=20" },
    { label: "Ruby", value: "q=language:ruby&stars:>1&page=1&per_page=20" },
    { label: "Python", value: "q=language:python&stars:>1&page=1&per_page=20" },
  ];

  return (
    <div>
      <div className="filter">
        <div className="filter-text">
          <h4>Select a filter option </h4>
        </div>
        <div className="filter-option">
          <Dropdown options={options} />
        </div>
      </div>
      <div className="chartContainer">
        <Bar data={data} maintainAspectRatio={false} responsive={true} />
      </div>
    </div>
  );
};
