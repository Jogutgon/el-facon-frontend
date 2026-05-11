
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import '../styles/RegisterStyles.css'
import logo from '../assets/icons/logo.svg'
import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../common/constants"
import { Link, useNavigate } from "react-router-dom"


function RegisterScreen() {

  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL + '/auth/register',
      {
        username,
        firstName,
        lastName,
        email,
        password
      });

      console.log(response.data);

      // alert('Registro exitoso');

      navigate('/login', {
        state: {
          confirmMessage: 'Registro exitoso. Inicia sesión'
        }
      });

    } catch (error) {
      console.log(error.response.data)
    };
  }


  return (


    <Container className=" register-page text-white fira-sans-thin">

      <h3 className="py-1">Registro</h3>
      <Row className="pt-2">
        <Col lg={6} md={12} xs={12} className="container-form mx-auto">
          <Form
            className="d-flex flex-column"
            onSubmit={handleRegister} >
            <Form.Group className="mb-2" controlId="formBasicUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Agrega un nombre de usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text"
               placeholder=" Ingresa tu nombre"
               onChange={(e) => setFirstName(e.target.value)}
               value={firstName} />
            </Form.Group><Form.Group className="mb-2" controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" 
              placeholder="Ingresa tu apellido"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName} />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" 
              placeholder="Ingresa tu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" 
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}/>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button className="mt-3" variant="success" type="submit">
                Registrarse
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center pt-2 login-link">
            <p className="d-inline me-1 register-text">¿Ya tienes cuenta?</p>
            <Link to="/login">Inicia sesión</Link>
          </div>
        </Col>

        <Col lg={6} md={12} xs={12} className='col-img' >
          <div className="register-image ">
            <div className="register-overlay ">
              <h1 className="">¡Bienvenido!</h1>
              <img src={logo} alt="logo" className="img-fluid logo" />
            </div>
          </div>

        </Col>
      </Row>
      <div className="register-copyright">
        <p>© 2026 Josefina Gutierrez Gonzalez.</p>
      </div>
    </Container>
  )
}

export default RegisterScreen


