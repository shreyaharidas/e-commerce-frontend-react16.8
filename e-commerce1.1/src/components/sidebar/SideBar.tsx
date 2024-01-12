// Sidebar.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Accordion } from 'react-bootstrap';
import styles from "./SideBar.module.css";
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    
    <Nav className={`flex-column ${styles["fixed-left"]}`} >
    <Nav.Link className="text-white m-2" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 3</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 4</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 5</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 6</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 7</Nav.Link>
    <Nav.Link className="text-white m-2" href="#">Category 8</Nav.Link>
  </Nav>
    
  );
};

export default Sidebar;
