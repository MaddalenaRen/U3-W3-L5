import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FetchMusicData } from "../redux/actions/action";

const MyNavbar = () => {
  const username = useSelector((state) => state.user.user.username);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      dispatch(FetchMusicData(searchTerm));
      setSearchTerm("");
    }
  };

  return (
    <>
      <Nav className="mt-auto">
        <Nav.Link disabled>Welcome, {username}</Nav.Link>
      </Nav>
      {/* Navbar DESKTOP */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="d-none d-lg-flex flex-column align-items-start p-3 position-relative"
        style={{
          height: "100%",
          width: "220px",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Navbar.Brand as={NavLink} to="/" className="mb-4">
          iMusic Clone
        </Navbar.Brand>
        {/* SEARCH FORM DESKTOP */}
        <Form className="w-100" onSubmit={handleSearch}>
          <FormControl
            type="search"
            placeholder="Cerca canzoni..."
            className="mb-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-light" size="sm" type="submit">
            Cerca
          </Button>
        </Form>
        <Nav className="flex-column w-100 mb-3">
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
      </Navbar>

      {/* Navbar MOBILE */}
      <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none px-3">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            iMusic Clone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            {/* SEARCH FORM MOBILE */}
            <Form className="d-flex my-2" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Cerca..."
                className="me-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-light" size="sm" type="submit">
                🔍
              </Button>
            </Form>
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
