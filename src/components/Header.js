import React from "react";
import { Container, NavDropdown, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <>
      <div className="header">
        <Navbar bg="" expand="lg" className="p-0">
          <Container fluid>
            <Navbar.Brand href="#home" className="logo">
              <Link to="/">
                <img alt="logo" src="/images/logo.png" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto ">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Shop</Nav.Link>
                <Nav.Link href="#link2">About Us</Nav.Link>
                <Nav.Link href="#link5">Contact</Nav.Link>
              </Nav>
              <Link to="">
                <FontAwesomeIcon icon={faSearch} className="me-2" /> Search
              </Link>
            </Navbar.Collapse>

            <Link to="">Sign in</Link>
            <Link to="">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
