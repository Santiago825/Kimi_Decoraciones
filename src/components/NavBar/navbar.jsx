import React from "react";
import {Container , Nav , Navbar  } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import logo from "../../accest/img/logo.png"
import "./navBar.css"



export default function Navbart (){

    return (
      <>

      <Navbar bg="light" expand="lg" className="mb-5" >
      <Container >
      <Navbar.Brand href="#home" className="logo_tittle">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            KIMI Decoraciones
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end gap-3 ">
            <NavLink className="text-decoration-none text-dark fw-bold" to="/">INICIO</NavLink>
            <NavLink className="text-decoration-none text-dark fw-bold" to="#link">ACCESORIO</NavLink>
            <NavLink className="text-decoration-none text-dark fw-bold" to="/about">SOBRE NOSOTROS</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
  
}
