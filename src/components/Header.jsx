import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/icons/logo.svg'

function Header() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" 
      data-bs-theme="dark" className='justify-content-between' fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top img-fluid"
              width="100"
              height="40"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#quienes-somos">Quienes somos</Nav.Link>
            <Nav.Link href="#galeria">Galeria</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#reservas">Reservas</Nav.Link>
          </Nav>

          <Button variant="outline-primary" className='mx-1'>Iniciar sesion</Button>
          <Button variant="outline-primary">Registrarse</Button>

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
