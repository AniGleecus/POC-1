import React, { useEffect } from "react";
import "./App.css";
import Plotly from "plotly.js-dist";
import Plot from "react-plotly.js";
import * as d3 from "d3";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([
    {
      type: "sunburst",
      ids: [
        "Arun",
        "Rahul",
        "Suman",
        "Arun - English",
        "Arun - Bengali",
        "Rahul - Hindi",
        "Rahul - Odia",
        "Suman - Bengali",
        "Suman - Math",
      ],
      labels: [
        "Arun",
        "Rahul",
        "Suman",
        "English",
        "Bengali",
        "Hindi",
        "Odia",
        "Bengali",
        "Math",
      ],
      parents: ["", "", "", "Arun", "Arun", "Rahul", "Rahul", "Suman", "Suman"],
      outsidetextfont: { size: 20, color: "#377eb8" },
      // leaf: {opacity: 0.4},
      marker: { line: { width: 2 } },
    },
  ]);

  var layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    sunburstcolorway: ["#636efa", "#ef553b", "#00cc96"],
  };
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Name", field: "name" },
    { headerName: "subject", field: "subject" },
    { headerName: "class", field: "class" },
    { headerName: "marks", field: "marks" },
    { headerName: "school", field: "school" },
    { headerName: "id", field: "id" },
  ]);
  const [newVal, setNewVal] = useState("");
  const newData = [
    {
      name: "Arun",
      subject: "English",
      class: "8th",
      marks: 90,
      school: "J.K. Mullen High School",
      id: "0",
    },
    {
      name: "Arun",
      subject: "Bengali",
      class: "8th",
      marks: 90,
      school: "J.K. Mullen High School",
      id: "0",
    },
    {
      name: "Rahul",
      subject: "Hindi",
      class: "5th",
      marks: 75,
      school: "Lynn Classical High School",
      id: "1",
    },
    {
      name: "Rahul",
      subject: "Odia",
      class: "5th",
      marks: 75,
      school: "Lynn Classical High School",
      id: "1",
    },
    {
      name: "Suman",
      subject: "Bengali",
      class: "9th",
      marks: 82,
      school: "South Anchorage HS",
      id: "2",
    },
    {
      name: "Suman",
      subject: "Math",
      class: "9th",
      marks: 82,
      school: "South Anchorage HS",
      id: "2",
    },
  ];
  useEffect(() => {
    //static json data
    setRowData(newData);
  }, []);

  const callingAnotherFunction = (id) => {
    var abc = [];
    // for (var i = 0; i < newData.length; i++) {
    //   if (id === newData[i].name) {
    //     abc.push(newData[i]);
    //     console.log(abc);
    //     setRowData(abc);
    //   }
    // }
  };

  const [cordClick, setCordClick] = useState("");
  const newFnBtn = (event) => {
    console.log(event.points[0]);
    console.log(event.points[0].id);
    callingAnotherFunction(event.points[0].id);
    setCordClick(event.points[0].id);
    //setNewVal(event.points[0].id);
    var abc = [];
    for (var i = 0; i < newData.length; i++) {
      if (event.points[0].id === newData[i].name) {
        abc.push(newData[i]);
        console.log(abc);
        setRowData(abc);
        // setdata(abc);
      }
      if (cordClick === event.points[0].id) {
        setRowData(newData);
        setCordClick("");
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div class="row">
            <div className="left">
              <div className="logo">Logo</div>
              <div className="business-developement">Menu-1</div>
              <div className="clinical">Menu-2</div>
              <div className="admin">Menu-3</div>
            </div>
          </div>
        </div>
      </div>
      <div class="graph-kpi">
        <div class="col-6 col-md-6">
          <div id="myDiv" style={{ margin: "3rem 0" }}>
            <Plot data={data} layout={layout} onClick={newFnBtn}></Plot>
          </div>
        </div>
        <div class="col-6 col-md-6">
          <div class="main-kpi">
            {rowData.map((value, index) => (
              <div className="kpi-cards" key={index}>
                <span>{value.subject}</span>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: "20rem", margin: "2rem 10rem" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={5}
          overlayNoRowsTemplate={
            '<span style="padding: 10px;">You currently have no data</span>'
          }
          defaultColDef={{
            editable: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            sortable: true,
            resizable: true,
          }}
        ></AgGridReact>
      </div>
    </>
  );
}
export default App;
