// Sidebar.js
import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Accordion,
} from "react-bootstrap";
import styles from "./SideBar.module.css";
import { ToggleSideBar } from "../TopSideNav/TopNavContext";
import { baseUrl } from "../../config/configUrl";
import { baseFE } from "../../config/configFEUrl";
const Sidebar = () => {

  const {toggle}= useContext(ToggleSideBar)

  return (
    <>
      
        <Nav className={`flex-column ${styles["fixed-left"]}`}>
          <Nav.Link className="text-white m-2" href={`${baseFE.local}${localStorage.getItem("role")}-home`}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white m-2" href="#">
            Category 2
          </Nav.Link>
          <Nav.Link className="text-white m-2" href="#">
            Category 3
          </Nav.Link>
          <Nav.Link className="text-white m-2" href="#">
            Category 4
          </Nav.Link>
          <Nav.Link className="text-white m-2" href="#">
            Category 5
          </Nav.Link>
          <Nav.Link className="text-white m-2" href="#">
            Category 6
          </Nav.Link>
          <Nav.Link className="text-white m-2" href="#">
            Category 7
          </Nav.Link>
        </Nav>
      
    </>
  );
};

export default Sidebar;
