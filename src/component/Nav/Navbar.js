import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import GithubUserHandler from '../Search';

const NavBarMenu = () => {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">React</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
         Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default NavBarMenu;