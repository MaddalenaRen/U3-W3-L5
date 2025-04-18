import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <>
      {/* Navbar DESKTOP (verticale laterale) */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="d-none d-lg-flex flex-column align-items-start p-3"
        style={{
          height: "100vh",
          width: "220px",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Navbar.Brand as={NavLink} to="/" className="mb-4">
          🎵 iMusic Clone
        </Navbar.Brand>
        <Nav className="flex-column w-100">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/search">
            Novità
          </Nav.Link>
          <Nav.Link as={NavLink} to="/library">
            Radio
          </Nav.Link>
        </Nav>
        <Nav className="mt-auto">
          <Nav.Link disabled>Welcome, {username}</Nav.Link>
        </Nav>
      </Navbar>

      {/* Navbar MOBILE (orizzontale in alto) */}
      <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none px-3">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            🎵 iMusic Clone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/search">
                Novità
              </Nav.Link>
              <Nav.Link as={NavLink} to="/library">
                Radio
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link disabled>Welcome, {username}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
