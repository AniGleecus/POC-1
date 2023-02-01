import React from "react";
import Plot from "react-plotly.js";

const Horizontal = () => {
  var xArr = [90, 35, 75, 61, 82, 77];
  var yArr = [
    "Arun - English",
    "Arun - Bengali",
    "Rahul - Hindi",
    "Rahul - Odia",
    "Suman - Bengali",
    "Suman - Math",
  ];

  var dataArr = [
    {
      x: xArr,
      y: yArr,
      type: "bar",
      orientation: "h",
      marker: {
        color: "#CD5888",
      },
    },
  ];

  var layoutArr = { title: "School Marks distribution- Horizontally" };
  return (
    <div>
      <div style={{ margin: "5rem 12rem" }}>
        <Plot data={dataArr} layout={layoutArr}></Plot>
      </div>
    </div>
  );
};

export default Horizontal;
