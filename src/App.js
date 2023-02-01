import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Horizontal from "./Horizontal";
import MainChart from "./MainChart";
import PieChart from "./PieChart";
import VerticalBar from "./VerticalBar";
import DonutChart from "./DonutChart";
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import NotFound from "./NotFound";
import Sensex from "./Sensex";
import Scatter from "./Scatter";

function App() {
  const navigate = useNavigate();

  //state of button
  const [btn, setbtn] = useState("homePage-after");
  const [btn1, setbtn1] = useState("pie-chart");
  const [btn2, setbtn2] = useState("ver-chart");
  const [btn3, setbtn3] = useState("hori-chart");
  const [btn4] = useState("option-list");
  const [btn5, setbtn5] = useState("donut-chart");
  const [btn6, setbtn6] = useState("sensex-chart");
  const [btn7, setbtn7] = useState("scatter-chart");

  // function-list
  const home = () => {
    navigate("/");
    setbtn("homePage-after");
    setbtn1("pie-chart");
    setbtn2("ver-chart");
    setbtn3("hori-chart");
    setbtn5("donut-chart");
    setbtn6("sensex-chart");
    setbtn7("scatter-chart");
  };

  const pie = () => {
    navigate("/pie");
    setbtn1("pie-chart-after");
    setbtn("homePage");
    setbtn2("ver-chart");
    setbtn3("hori-chart");
    setbtn5("donut-chart");
    setbtn6("sensex-chart");
    setbtn7("scatter-chart");
  };

  const ver = () => {
    navigate("/vertical");
    setbtn1("pie-chart");
    setbtn("homePage");
    setbtn2("ver-chart-after");
    setbtn3("hori-chart");
    setbtn5("donut-chart");
    setbtn6("sensex-chart");
    setbtn7("scatter-chart");
  };

  const hori = () => {
    navigate("/horizontal");
    setbtn1("pie-chart");
    setbtn("homePage");
    setbtn2("ver-chart");
    setbtn3("hori-chart-after");
    setbtn5("donut-chart");
    setbtn6("sensex-chart");
    setbtn7("scatter-chart");
  };

  const donut = () => {
    navigate("/donut");
    setbtn1("pie-chart");
    setbtn("homePage");
    setbtn2("ver-chart");
    setbtn3("hori-chart");
    setbtn5("donut-chart-after");
    setbtn6("sensex-chart");
    setbtn7("scatter-chart");
  };

  const sensex = () => {
    navigate("/sensex");
    setbtn1("pie-chart");
    setbtn("homePage");
    setbtn2("ver-chart");
    setbtn3("hori-chart");
    setbtn5("donut-chart");
    setbtn6("sensex-chart-after");
    setbtn7("scatter-chart");
  };

  const scatt = () => {
    navigate("/scatter");
    setbtn1("pie-chart");
    setbtn("homePage");
    setbtn2("ver-chart");
    setbtn3("hori-chart");
    setbtn5("donut-chart");
    setbtn6("sensex-chart");
    setbtn7("scatter-chart-after");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div class="row">
            <div className="left">
              <div className={btn} onClick={home}>
                HomePage
              </div>
              <div className={btn4}>
                <Navbar>
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <NavDropdownMenu
                          title="Name & Subject list"
                          id="collasible-nav-dropdown"
                        >
                          <div className="name-list">Name list</div>
                          <NavDropdown.Item>Arun</NavDropdown.Item>
                          <NavDropdown.Item>Rahul</NavDropdown.Item>
                          <NavDropdown.Item>Suman</NavDropdown.Item>
                          <DropdownSubmenu title="Subject list">
                            <div className="name-list">Subject list</div>
                            <NavDropdown.Item>English</NavDropdown.Item>
                            <NavDropdown.Item>Bengali</NavDropdown.Item>
                            <NavDropdown.Item>Hindi</NavDropdown.Item>
                            <NavDropdown.Item>Odia</NavDropdown.Item>
                            <NavDropdown.Item>Bengali</NavDropdown.Item>
                            <NavDropdown.Item>Math</NavDropdown.Item>
                          </DropdownSubmenu>
                        </NavDropdownMenu>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
              <div className={btn2} onClick={ver}>
                BarGraph-vertical
              </div>
              <div className={btn3} onClick={hori}>
                BarGraph-horizontal
              </div>
              <div className={btn1} onClick={pie}>
                PieChart
              </div>
              <div className={btn5} onClick={donut}>
                DonutChart
              </div>
              <div className={btn6} onClick={sensex}>
                SensexChart
              </div>
              <div className={btn7} onClick={scatt}>
                ScatterChart
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainChart />}></Route>
        <Route path="/pie" element={<PieChart />}></Route>
        <Route path="/vertical" element={<VerticalBar />}></Route>
        <Route path="/horizontal" element={<Horizontal />}></Route>
        <Route path="/donut" element={<DonutChart />}></Route>
        <Route path="/sensex" element={<Sensex />}></Route>
        <Route path="/scatter" element={<Scatter />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
export default App;
