import React from "react";
import Plot from "react-plotly.js";

const Sensex = () => {
  var xArray = [50, 57, 59, 60, 65, 68, 69, 70, 80, 86, 97];
  var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 12, 12, 12];

  // Define Data
  var data = [
    {
      x: xArray,
      y: yArray,
      mode: "lines",
    },
  ];

  // Define Layout
  var layout = {
    xaxis: { range: [40, 100], title: "Number of Students" },
    yaxis: { range: [5, 14], title: "Class" },
    title: "Number of Students vs Class",
  };
  return (
    <div>
      <div style={{ margin: "5rem 12rem" }}>
        <Plot data={data} layout={layout}></Plot>
      </div>
    </div>
  );
};

export default Sensex;
