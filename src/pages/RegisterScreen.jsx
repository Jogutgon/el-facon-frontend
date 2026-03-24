import { Button, Col, Container, Form, Row } from "react-bootstrap"


function RegisterScreen() {
  return (

    <Container className="pt-3 ">


      <div className="caja register-page text-white">

        <h2 >Registro</h2>
        <Row className="d-flex">
          <Col lg={6} md={6} xs={12}>
            <Form className="mb-3" >
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Agrega un nombre de usuario" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder=" Ingresa tu nombre" />
              </Form.Group><Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu apellido" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Registrarse
              </Button>

            </Form>

            <p className="d-inline me-1">¿Ya tenés cuenta?</p>
            <a href="">Iniciar sesión</a> 

          </Col>

          <Col className="">

            <div className="register-image">
              <Container>
                <h2>Bienvenido</h2>
              </Container>
            </div>
          
          
          </Col>


        </Row>

      </div>
    </Container>

  )
}

export default RegisterScreen
