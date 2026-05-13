import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/icons/logo.svg'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header({ authenticated = false, admin = false, changeJwt }) {

  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate();
  
  return (
    <div>
      <Navbar expanded={expanded} expand="lg" bg="dark" variant='dark'
      data-bs-theme="dark" className='justify-content-between text-center' fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
            <img
              src={logo}
              className="d-inline-block align-top img-fluid"
              width="100"
              height="40"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : true)}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='fira-sans-regular' href="/#quienes-somos">Quienes somos</Nav.Link>
            <Nav.Link className='fira-sans-regular' href="/#galeria">Galeria</Nav.Link>
            <Nav.Link className='fira-sans-regular' href="/#contacto">Contacto</Nav.Link>
            <Nav.Link className='fira-sans-regular' href="/#reservas">Reservas</Nav.Link>
          </Nav>


          <Nav className='me-auto'>
          {
              authenticated && admin && (
              <> 
                <Nav.Link className='fira-sans-regular' as={Link} to="/admin" onClick={() => setExpanded(false)} >Panel Admin</Nav.Link>
                <Nav.Link className='fira-sans-regular' as={Link} to="/admin/users" onClick={() => setExpanded(false)} >Usuarios</Nav.Link>
                <Nav.Link className='fira-sans-regular' as={Link} to="/admin/reservations" onClick={() => setExpanded(false)} >Reservas</Nav.Link></>
               )
            }

            {
              authenticated && !admin && (
                <>
                <Nav.Link className='fira-sans-regular' as={Link} to="/user" onClick={() => setExpanded(false)} >Panel</Nav.Link>
                <Nav.Link className='fira-sans-regular' as={Link} to="/user/reservations" onClick={() => setExpanded(false)} >Mis Reservas</Nav.Link>
                <Nav.Link className='fira-sans-regular' as={Link} to="/user/reservations/new" onClick={() => setExpanded(false)} >Reservar</Nav.Link>
                </>
              )
            }
            </Nav>



          { 
              authenticated === false ? ( 
                <>
                  <Button variant="outline-primary" className='mx-2 fira-sans-regular' 
                  as={Link} to='/login' >Iniciar sesion</Button>
                  <Button variant="outline-primary" className='fira-sans-regular' 
                  as={Link} to='/register' >Registrarse</Button>
                </>
              ) : ( 
                  <Button variant="btn btn-link"
                  className='fira-sans-regular' 
                  onClick={() => {
                    changeJwt("");
                    navigate("/login");}
                  } >Cerrar sesion</Button> 
          )
        }
          

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>
  )
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  changeJwt: PropTypes.func.isRequired
}

export default Header
