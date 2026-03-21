import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import separator from '../assets/icons/sep.svg'

function ContactSection() {
  return (
    <section id='contacto'>
      <img className='sep-icn mt-4 d-block mx-auto' src={separator} alt="separator" />

      <Container className='caja'>
        <Row>
          <Col>
            <h3 className='fira-sans-thin text-center pt-2 pb-3'>Contactos </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident aspernatur quasi accusamus vero nemo nam fugiat.
              Tempore magni atque sed illo? Perferendis error maiores reiciendis
              cum commodi tempora laborum facere!</p>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label className='text-white'>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre y apellido" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='text-white'>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection

