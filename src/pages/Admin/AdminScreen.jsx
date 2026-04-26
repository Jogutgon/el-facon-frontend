
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../../styles/AdminStyles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function AdminScreen() {

  
  return (
    <Container className='text-white my-5 py-5 marco page-admin'>
      <Row className='text-center'>
        <Col>
          <h1 className='py-5'>¡Bienvenido a tu panel!</h1>
        </Col>
      </Row>
      <Row className='pt-5 justify-content-center g-4'>
        <Col className='marco d-flex justify-content-center'>
          <Card style={{ width: '18rem' }} className='bg-primary text-white text-center'>
            <Card.Body>
              <Card.Title><i className="bi bi-people-fill icon-fs"></i></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total de usuarios</Card.Subtitle>
              <Card.Text>
                {totalUser}
              </Card.Text>
              <Card.Link className='text-dark' href="#">Ver usuarios</Card.Link>
              
            </Card.Body>
          </Card>
        </Col>

        <Col className='d-flex justify-content-center marco'>
          <Card style={{ width: '18rem' }} className='bg-success text-white text-center'>
            <Card.Body>
              <Card.Title><i className="bi bi-calendar3 icon-fs"></i></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total de reservas</Card.Subtitle>
              <Card.Text>
                {totalReserv}
              </Card.Text>
              <Card.Link className='text-dark' href="#">Ver reservas</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col className='d-flex justify-content-center marco'>
          <Card style={{ width: '18rem' }} className='bg-danger text-white text-center'>
            <Card.Body>
              <Card.Title><i className="bi bi-person-fill-slash icon-fs"></i></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Usuarios Inactivos</Card.Subtitle>
              <Card.Text>
                Contador
              </Card.Text>
              <Card.Link className='text-dark' href="#">Card Link</Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminScreen
