import React from 'react'
import separator from '../assets/icons/sep.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'

function ReservaSection() {
  return (
    <section id='reservas' className='fira-sans-thin'>
      <img className='sep-icn mt-4 d-block mx-auto' src={separator} alt="separator" />
      <h3 className='fira-sans-thin text-center pt-2 pb-3'> Reservas </h3>
      <Container className='mb-5'>
        <Row className='flex-column text-center text-white ' >
          <Col>
            <h4>¿Te gustaría hacer una reserva?</h4>
            <p>No te pierdas la oportunidad de aprovechar nuestros servicios y de compartir
              junto a tu familia un momento único.
            </p>
            <p>¡Haz click en este botón!</p>
          </Col>
          <Col>
            <Button className='mb-3' variant='danger'>Reservar mesa</Button>
            <h5>¡Te esperamos!</h5>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default ReservaSection

