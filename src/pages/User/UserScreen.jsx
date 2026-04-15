import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';

function UserScreen() {
  return (
    <Container className='text-white my-5 py-5 text-center'>
      <Row>
        <Col></Col>
        <Col>
          <h1 className='my-5 mx-auto'>¡BIENVENIDO!</h1>
          <h4 className='mb-3'>Este es tu panel como usuario</h4>
          <p className='mb-4'>Puedes chequear tus reservas o realizar nuevas</p>

          <Col className='d-flex justify-content-center'>
            <Button className='mx-3' as={Link} to='/user/reservations'>Ver mis Reservas</Button>
            <Button className='mx-3' as={Link} to='/user/reservations/new' >Hacer reserva</Button>
          </Col>

          <Alert variant='danger' className='mt-5'>
          <i class="bi bi-bell-fill pe-2"></i>
          En caso de cancelar una reserva, recuerda hacerlo con 3 horas de anticipación.
        </Alert>

        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default UserScreen
