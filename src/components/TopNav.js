import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./assets/styles/topNav.css";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="container">
      {" "}
      <Navbar className="navbar mt-1" bg="light" expand="sm">
        <Container>
          <Navbar.Brand className="navbarBrand" href="#home">
            SchoolAdmin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="navLink">Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="add_new_student">
                <Nav.Link className="navLink">Add New</Nav.Link>
              </LinkContainer>
              <LinkContainer to="manage_information">
                <Nav.Link className="navLink">Manage Information</Nav.Link>
              </LinkContainer>
              <LinkContainer to="remove_student">
                <Nav.Link className="navLink">Remove List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="about_us">
                <Nav.Link className="navLink">About Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
