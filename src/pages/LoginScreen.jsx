import PropTypes from 'prop-types'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../styles/LoginStyles.css'
import logo from '../assets/icons/logo.svg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'


function LoginScreen({ changeJwt }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  

  const handleLogin = (event) => {
    event.preventDefault();
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };


    fetch("http://localhost:7000/auth/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("LOGIN RESULT:", result);

      if(!result || !result.access_token) {
        console.error("Token invalido", result);
        alert("Correo o contraseña incorrectos");
        return;
      }

      changeJwt(result.access_token);

      try{
        const decoded = jwtDecode(result.access_token);

        if (decoded.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      } catch(error) {
        console.log("Error decodificando token", error);
      }
    })
    .catch((error) => console.error(error));
    
}
 

  return (
    <Container className="login-page text-white fira-sans-thin">

      <h3 className="pt-1 pb-2">Login</h3>
      <Row className="login-container">
        <Col lg={6} md={12} xs={12} className="login-container-form mx-auto">

          <Form className="d-flex flex-column" onSubmit={handleLogin} >
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                onChange={(event) => setEmail(event.target.value)}
                value={email} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                onChange={(event) => setPassword(event.target.value)}
                value={password} />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button className="mt-3" variant="success" type="submit"
                >Iniciar Sesión</Button>
            </div>
          </Form>


          <div className="d-flex justify-content-center pt-5 login-link">
            <p className="d-inline me-1">¿Aún no tienes cuenta?</p>
            <Link  to="/register">Registrarse</Link>
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



LoginScreen.propTypes = {
  changeJwt: PropTypes.func.isRequired
}


export default LoginScreen
