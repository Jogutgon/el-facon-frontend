import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/icons/logo.svg'

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              className="logo-nav d-inline-block align-top"
              width="90"
              height="40"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#home">Quienes somos</Nav.Link>
            <Nav.Link className='text-white' href="#link">Galeria</Nav.Link>
            <Nav.Link className='text-white' href="#link">Contacto</Nav.Link>
            <Nav.Link className='text-white' href="#link">Reservas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
