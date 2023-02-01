import React from "react";
import Plot from "react-plotly.js";

const VerticalBar = () => {
  var xArray = [
    "Arun - English",
    "Arun - Bengali",
    "Rahul - Hindi",
    "Rahul - Odia",
    "Suman - Bengali",
    "Suman - Math",
  ];
  var yArray = [90, 35, 75, 61, 82, 77];

  var dataVal = [
    {
      x: xArray,
      y: yArray,
      type: "bar",
      marker: {
        color: "#FF0000",
        width: 1,
      },
    },
  ];
  var layoutVal = { title: "School Marks distribution- Vertically" };
  return (
    <div>
      {" "}
      <div style={{ margin: "5rem 12rem" }}>
        <Plot data={dataVal} layout={layoutVal}></Plot>
      </div>
    </div>
  );
};

export default VerticalBar;
