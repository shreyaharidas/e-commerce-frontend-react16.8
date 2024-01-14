import React, { ReactNode } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from '../navbar/TopNav';
import Sidebar from '../sidebar/SideBar';
import { TopSideNavProps } from './types';
import ToggleContext from './TopNavContext';

const TopSideNav = ({children}:TopSideNavProps) => {
  return (
    <ToggleContext>
    <Row>
      {/* Top Navigation */}
      <Col xs={12} id="topnav-col">
        <TopNav />
      </Col>
    </Row>
    <Row>
      {/* Sidebar and Main Content */}
      <Col xs={1} sm={2} md={2} lg={2} id="sidebar-col">
        <Sidebar />
      </Col>
      <Col xs={11} sm={10} md={10} lg={10} id="content-col" className="offset-sm-2 offset-md-2 offset-lg-2">
       {children}
      </Col>
    </Row>
    </ToggleContext>
  )
}

export default TopSideNav
