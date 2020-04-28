import React from 'react';
import logo from '../Images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
<Navbar expand="lg">
      <Nav href="home">
        <Link to="/">
          <img src={logo} className="logo" alt="logo"></img>
        </Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
        <Nav>
          <Link className="nav-link" to="/pets/dog">
            Dogs
          </Link>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/pets/cat">
            Cats
          </Link>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/pets/rabbit">
            Rabbits
          </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/pets/bird">
              Birds
            </Link>
          </Nav>
        <Nav.Item as="li">
          <Nav eventkey="link-1">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </Nav>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
