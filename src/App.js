import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Horizontal from "./Horizontal";
import MainChart from "./MainChart";
import PieChart from "./PieChart";
import VerticalBar from "./VerticalBar";
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import NotFound from "./NotFound";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div class="row">
            <div className="left">
              <div
                style={{ "margin-top": "1rem", cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                HomePage
              </div>
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
              <div
                style={{ "margin-top": "1rem", cursor: "pointer" }}
                onClick={() => navigate("/pie")}
              >
                PieChart
              </div>
              <div
                style={{ "margin-top": "1rem", cursor: "pointer" }}
                onClick={() => navigate("/vertical")}
              >
                BarGraph-vertical
              </div>
              <div
                style={{ "margin-top": "1rem", cursor: "pointer" }}
                onClick={() => navigate("/horizontal")}
              >
                BarGraph-horizontal
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
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
export default App;
