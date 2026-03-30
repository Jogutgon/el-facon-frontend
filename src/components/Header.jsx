import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/icons/logo.svg'
import PropTypes from 'prop-types';

function Header({ authenticated = false, admin = false, changeJwt }) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant='dark'
      data-bs-theme="dark" className='justify-content-between text-center' fixed='top'>
      <Container>
        <Navbar.Brand href="/">
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


          <Nav className='me-auto'>
          {
              authenticated && admin && (
              <> 
                <Nav.Link className='' href="#panel">Panel Admin</Nav.Link>
                <Nav.Link href="#user">users</Nav.Link>
                <Nav.Link href="#reserva">reservas</Nav.Link></>
               )
            }

            {
              authenticated && !admin && (
                <Nav.Link href="#misreservas">Mis reservas</Nav.Link>
              )
            }
            </Nav>



          { 
              authenticated === false ? ( 
                <>
                  <Button variant="outline-primary" className='mx-1' href='/login' >Iniciar sesion</Button>
                  <Button variant="outline-primary" href='/register' >Registrarse</Button>
                </>
              ) : ( 
                  <Button variant="btn btn-link" onClick={() => changeJwt("")} >Cerrar sesion</Button> 
          )
        }
          

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  )
}

Header.PropTypes = {
  authenticated: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  changeJwt: PropTypes.func.isRequired
}

export default Header
