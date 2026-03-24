
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import '../styles/RegisterStyles.css'
import logo from '../assets/icons/logo.svg'

function RegisterScreen() {
  return (

    
    <Container className=" register-page text-white">

        <h2 >Registro</h2>
        <Row className="">
          <Col  className=" flex-column">
            <Form className="mb-2" >
              <Form.Group className="mb-2" controlId="formBasicUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Agrega un nombre de usuario" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder=" Ingresa tu nombre" />
              </Form.Group><Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu apellido" />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
              </Form.Group>

              <Button className="register-button" variant="primary" type="submit">
                Registrarse
              </Button>

            </Form>
            <div className="pb-2">
              <p className="d-inline me-1 register-text">¿Ya tenés cuenta?</p>
            <a href="">Iniciar sesión</a>
            </div>
             

          </Col>

          <Col className='col-img' >

            <div className="register-image ">
              
              <div className="register-overlay ">
                <h1 className="">¡Bienvenido!</h1>
                <img src={logo} alt="logo" className="img-fluid "/>
              </div>
              
            </div>
          
          </Col>
        </Row>

    </Container>
  )
}

export default RegisterScreen


