import React from "react";
import { useEffect, useRef } from "react";
import "./App.css";
import Plot from "react-plotly.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { useState } from "react";
import "./App.css";
import "react-bootstrap-submenu/dist/index.css";

const MainChart = () => {
  const [data] = useState([
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
    title: "Student Names & their respective Subjects",
  };
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef();
  const [columnDefs] = useState([
    { headerName: "Name", field: "name" },
    { headerName: "Subject", field: "subject" },
    { headerName: "Class", field: "class" },
    { headerName: "Marks", field: "marks" },
    { headerName: "School", field: "school" },
  ]);
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
      marks: 35,
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
      marks: 61,
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
      marks: 77,
      school: "South Anchorage HS",
      id: "2",
    },
  ];
  useEffect(() => {
    //static json data
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
        marks: 35,
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
        marks: 61,
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
        marks: 77,
        school: "South Anchorage HS",
        id: "2",
      },
    ];
    setRowData(newData);
  }, []);

  const [cordClick, setCordClick] = useState("");
  const newFnBtn = (event) => {
    console.log(event.points[0]);
    console.log(event.points[0].id);
    //setNewVal(event.points[0].id);
    var abc = [];
    for (var i = 0; i < newData.length; i++) {
      if (event.points[0].id === newData[i].name) {
        abc.push(newData[i]);
        console.log(abc);
        setRowData(abc);
        setCordClick(event.points[0].id);
        // setdata(abc);
      }
    }
    if (
      cordClick &&
      (event.points[0].id === "Arun" ||
        event.points[0].id === "Rahul" ||
        event.points[0].id === "Suman")
    ) {
      setRowData(newData);
      setCordClick("");
      debugger;
    } else {
      debugger;
    }
    if (
      event.points[0].id ===
      ("Arun - English" ||
        "Arun - Bengali" ||
        "Rahul - Hindi" ||
        "Rahul - Odia" ||
        "Suman - Bengali" ||
        "Suman - Math")
    ) {
      debugger;
    } else {
      debugger;
    }
    setTimeout(() => {}, 1000);
  };

  const KpiBtn = (value) => {
    console.log(value.name);
  };

  return (
    <div>
      <>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div id="myDiv" style={{ margin: "3rem 0" }}>
                <Plot data={data} layout={layout} onClick={newFnBtn}></Plot>
              </div>
            </div>
            <div class="col-sm">
              <div class="main-kpi">
                {rowData.map((value, index) => (
                  <div className="kpi-cards" key={index}>
                    <span
                      onClick={() => KpiBtn(value)}
                      style={{ cursor: "pointer" }}
                    >
                      {value.subject}
                    </span>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="ag-theme-alpine"
          style={{ height: "20rem", margin: "2rem 16rem" }}
        >
          <AgGridReact
            ref={gridRef}
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
              filter: "agTextColumnFilter",
              filterParams: {
                buttons: ["reset", "apply"],
                closeOnApply: true,
                suppressAndOrCondition: true,
              },
            }}
          ></AgGridReact>
        </div>
      </>
    </div>
  );
};

export default MainChart;
