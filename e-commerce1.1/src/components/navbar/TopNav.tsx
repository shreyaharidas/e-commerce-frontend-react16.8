import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from "./TopNav.module.css";
import { List } from 'react-bootstrap-icons';

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={`${styles["fixed-top"]}`}>
      <div className='d-inline-flex'>
     
        <List className="text-white" size={"50"} />

        {/* <Nav className="me-auto d-block mx-auto">
          <Nav.Link href="#" className={`${styles["nav-contents"]}`}>Home</Nav.Link>
          <Nav.Link href="#" className={`${styles["nav-contents"]}`}>About</Nav.Link>
          <Nav.Link href="#" className={`${styles["nav-contents"]}`}>Products</Nav.Link>
         
        </Nav> */}
        </div> 
        <Navbar.Brand href="#" className='ms-auto align-self-center'>Your Brand</Navbar.Brand>
       
    </Navbar>
  );

};


export default TopNav;
