import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserScreen() {
  return (
    <Container className='text-white my-5 py-5 text-center'>


      <Row>
        <h1 className='my-5 mx-auto'>¡BIENVENIDO!</h1>
        <h4 className='mb-5'>¿Que deseas hacer?</h4>
        <Col className='d-flex-column'>
          <Button className='mx-3' as={Link} to='/user/myreservation'>Hacer Reserva</Button>
          <Button>Ver mis reservas</Button>
        </Col>
      </Row>

    </Container>
  )
}

export default UserScreen
