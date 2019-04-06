import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import imdb from "../logo/imdb.png";

import { Navbar, Nav } from "react-bootstrap";
class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <img
            src={imdb}
            alt="Italian Trulli"
            style={{ width: 80, height: 50 }}
          />
          <Navbar.Brand href="#home">Movies-Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="../LoginForm" style={{ color: "#000000" }}>
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="../RegisterForm" style={{ color: "#000000" }}>
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="../Movies" style={{ color: "#000000" }}>
                  Movies
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="../Customers" style={{ color: "#000000" }}>
                  Customers
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="../Rentals" style={{ color: "#000000" }}>
                  Rentals
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
