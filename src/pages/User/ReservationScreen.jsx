import React from 'react'
import '../../styles/ReservationStyles.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function ReservationScreen() {
  return (
    <Container className='reserv-page text-light cajaGREEN'>

    <h1 className=' text-white'>Realizar reserva</h1>

    <Form className='mt-5'>

      <Row > 
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Selecciona una fecha</Form.Label>
          <Form.Control type="date"  step={6} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Horario</Form.Label>
          <Form.Control type="time"   />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Comensales</Form.Label>
          <Form.Control type='text'  />
        </Form.Group>
      </Row>
      <div className='d-flex justify-content-center mt-5'>
        <Button variant='success' type="submit" >Confirmar Reserva</Button>
      </div>
      

    </Form>
    
    
      
    </Container>
  )
}

export default ReservationScreen
