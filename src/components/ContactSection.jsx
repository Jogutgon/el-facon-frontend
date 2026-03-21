import React from 'react'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import separator from '../assets/icons/sep.svg'
import call from '../assets/icons/llamar.png'
import mail from '../assets/icons/email.png'
import map from '../assets/icons/map.png'

function ContactSection() {
  return (
    <section id='contacto' className='my-4'>
      <img className='sep-icn mt-4 d-block mx-auto' src={separator} alt="separator" />
      <h3 className='fira-sans-thin text-center pt-2 pb-3'> Contactos </h3>

      <Container className='fira-sans-thin mt-3'>
        <Row className='gap-5 d-flex'>
          <Col className='contact-box text-center'>
            <h3 className='fira-sans-thin text-center pt-3 pb-3'>¿Cómo contactarnos?</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident aspernatur quasi accusamus vero nemo nam fugiat.
              Tempore magni atque sed illo? Perferendis error maiores reiciendis
              cum commodi tempora laborum facere!</p>
            <Row className='d-flex text-center'> 
              <Col>
                <img src={call} alt="phone" className='img-fluid contact-icon mb-1' />
                <p>+54 9 381 000 0000</p>
              </Col>
              <Col>
                <img src={mail} alt="mail" className='img-fluid contact-icon mb-1' />
                <p>restoelfacon@facon.com</p>
              </Col>
              <Col>
                <img src={map} alt="map" className='img-fluid contact-icon mb-1' />
                <p>San Javier, Tucumán</p>
              </Col>



            </Row>
          </Col>
          <Col>
            <Form className='py-2'>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label className='text-white'>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre y apellido" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='text-white'>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection

