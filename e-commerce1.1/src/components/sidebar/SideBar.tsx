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
    
    <Nav className={`flex-column bg-primary ${styles["fixed-left"]}`} >
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 1</Nav.Link>
    <Nav.Link className="text-white" href="#">Category 2</Nav.Link>
    {/* Add more category links as needed */}
  </Nav>
    
  );
};

export default Sidebar;
