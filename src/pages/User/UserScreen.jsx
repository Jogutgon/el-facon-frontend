import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from '../../assets/img/food1.png'
import img2 from '../../assets/img/food2.png'
import '../../styles/imagesDashboard.css'

function UserScreen() {
  return (
    <Container className='text-white my-5 py-5 text-center fira-sans-regular'>
      <Row className='align-items-center g-4'>
        <Col xxl={3} xl={3} lg={3} md={12} className='text-center'>
        <img src={img1} alt="food" className='img-food img-fluid' />
        </Col>
        <Col>
          <h1 className='my-4 fira-sans-bold'>¡BIENVENIDO!</h1>
          <h4 className='mb-3 fira-sans-regular'>Este es tu panel como usuario</h4>
          <p className='mb-4'>Puedes chequear tus reservas o realizar nuevas</p>

          <div className='d-flex flex-column flex-md-row justify-content-center gap-3'>
            <Button as={Link} to='/user/reservations'>Ver mis Reservas</Button>
            <Button as={Link} to='/user/reservations/new' >Hacer reserva</Button>
          </div>

          <Alert variant='danger' className='mt-5'>
          <i className="bi bi-bell-fill pe-2"></i>
          En caso de cancelar una reserva, recuerda hacerlo con 3 horas de anticipación.
        </Alert>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={12} className='text-center'>
          <img src={img2} alt="food" className='img-food' />
        </Col>
      </Row>
    </Container>
  )
}

export default UserScreen
