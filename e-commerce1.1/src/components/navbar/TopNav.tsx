import React, { useContext, useState } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import styles from "./TopNav.module.css";
import { List } from "react-bootstrap-icons";
import { ToggleSideBar } from "../TopSideNav/TopNavContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../Authentication/logout";

const TopNav = () => {

const navigate= useNavigate();

  const {toggleFunction}= useContext(ToggleSideBar);

const routeToProfile=()=>{
  navigate("/profile")
}


  return (
    <Navbar bg="dark" expand="lg" className={`${styles["fixed-top"]}`}>
      <div className="d-inline-flex">
        <List className="text-white" size={"50"} onClick={toggleFunction}/>
      </div>
      <div className="ms-auto flex-grow-1">
        <Navbar.Brand href="#" className="text-white">
          Your Brand
        </Navbar.Brand>
      </div>
      <div className="d-inline-flex text-white m-auto pe-2">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={routeToProfile}>My Profile</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default TopNav;
