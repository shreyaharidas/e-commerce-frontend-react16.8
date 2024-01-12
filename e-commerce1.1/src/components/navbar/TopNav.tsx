import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from "./TopNav.module.css";
import { List } from 'react-bootstrap-icons';

const TopNav = () => {
  return (
    <Navbar bg="dark" expand="lg" className={`${styles["fixed-top"]}`}>
      <div className='d-inline-flex'>
     
        <List className="text-white" size={"50"} />
        </div> 
        <Navbar.Brand href="#" className='ms-auto align-self-center text-white'>Your Brand</Navbar.Brand>
       
    </Navbar>
  );

};


export default TopNav;
