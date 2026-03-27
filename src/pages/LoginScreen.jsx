
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../styles/LoginStyles.css'
import logo from '../assets/icons/logo.svg'

function LoginScreen() {
  return (
    <Container className="login-page text-white fira-sans-thin">

      <h3 className="pt-1 pb-2">Login</h3>
      <Row className="login-container">
        <Col lg={6} md={12} xs={12} className="login-container-form mx-auto">
          <Form className="d-flex flex-column" >
            <Form.Group className="mb-3 mt-4" controlId="formBasicUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button className="mt-3" variant="success" type="submit">
                Iniciar Sesión
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center pt-5 login-link">
            <p className="d-inline me-1">¿Aún no tienes cuenta?</p>
            <a href="/register">Registrarse</a>
          </div>
        </Col>

        <Col lg={6} md={12} xs={12} className='login-col-img' >
          <div className="login-image">
            <div className="login-overlay">
              <h1 className="">¡Bienvenido!</h1>
              <img src={logo} alt="logo" className="img-fluid logo" />
            </div>
          </div>

        </Col>
      </Row>
      <div className="login-copyright">
              <p>© 2026 Josefina Gutierrez Gonzalez.</p>
            </div>
    </Container>
  )
}

export default LoginScreen
