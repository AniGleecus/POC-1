import React from "react";
import Plot from "react-plotly.js";

function PieChart() {
  var xArrayPie = [
    "Arun - English",
    "Arun - Bengali",
    "Rahul - Hindi",
    "Rahul - Odia",
    "Suman - Bengali",
    "Suman - Math",
  ];
  var yArrayPie = [90, 35, 75, 61, 82, 77];

  var layoutPie = { title: "School Marks distribution- DonutChart" };

  var dataPie = [{ labels: xArrayPie, values: yArrayPie, type: "pie" }];
  return (
    <div>
      <div style={{ margin: "5rem 12rem" }}>
        <Plot data={dataPie} layout={layoutPie}></Plot>
      </div>
    </div>
  );
}

export default PieChart;
