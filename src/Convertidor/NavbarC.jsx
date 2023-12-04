import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../logo.png";
import Singup from "./Singup";
import Login from "./Login";
import Main from "./Main";
import Hero from "./Hero";

export default class NavbarC extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar
            className="ml-3"
            bg="transparent"
            variant={"dark"}
            expand="lg"
          >
            <Navbar.Brand as={Link} to="/hero">
              <img
                src={logo}
                height="70px"
                className="d-inline-block align-top ml-2"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "130px" }}
              >
                <Nav.Link as={Link} to="/main">
                  Convert
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/singup">
                  Sing up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/singup">
              <Singup />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/hero">
              <Hero />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
