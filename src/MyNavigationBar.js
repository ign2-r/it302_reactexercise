import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// Rockwell Dela Rosa, IT302-451, Unit 10 React.js Exercise, rmd2@njit.edu
function MyNavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand>Rockwell Dela Rosa (rmd2)</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>Check Out</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavigationBar;
