
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import separator from '../assets/icons/sep.svg'
import call from '../assets/icons/llamar.png'
import mail from '../assets/icons/email.png'
import map from '../assets/icons/map.png'

function ContactSection() {
  return (
    <section id='contacto' className='mt-3 section'>
      <img className='sep-icn mt-4 d-block mx-auto mt-5' src={separator} alt="separator" />
      <h2 className='fira-sans-thin text-center pt-5 pb-4'> Contactos </h2>

      <Container className='fira-sans-thin mt-4 mb-4 pb-3'>
        <Row className='pt-4 gap-4'>

          <Col lg={6} md={6} xs={12} className='contact-box text-center me-lg-3'>
            <h4 className='fira-sans-thin text-center pt-4 pb-3'>¿Cómo contactarnos?</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident aspernatur quasi accusamus vero nemo nam fugiat.
              Tempore magni atque sed illo? Perferendis error maiores reiciendis
              cum commodi tempora laborum facere!</p>
            <Row className='d-flex text-center mt-4'> 
              <Col lg={4} md={6} xs={6}>
                <img src={call} alt="phone" className='img-fluid contact-icon mb-1' />
                <p>+54 9 381 000 0000</p>
              </Col>
              <Col lg={4} md={6} xs={6} >
                <img src={mail} alt="mail" className='img-fluid contact-icon mb-1' />
                <p>restoelfacon@facon.com</p>
              </Col>
              <Col  lg={4} md={6} xs={12} >
                <img src={map} alt="map" className='img-fluid contact-icon mb-1' />
                <p>San Javier, Tucumán</p>
              </Col>
            </Row>
          </Col>


          <Col lg={6} md={6} xs={12}  className='ms-lg-3 form-box' >
          <h4>Dejanos un mensaje</h4>
            <Form className='pt-2'>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label className='text-white'>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre y apellido..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='text-white'>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo..." />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Deja tu comentario aquí...">
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

