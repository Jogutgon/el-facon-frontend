
import separator from '../assets/icons/sep.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'

function ReservaSection() {
  return (
    <section id='reservas' className='fira-sans-thin reserva-section section'>

      <div className='overlay-reservation'>
        
        <Container className='py-5 '>
          <img className='sep-icn pb-5' src={separator} alt="separator" />
          <h2 className='fira-sans-thin text-center pt-2 mb-5 '> Reservas </h2>
          <Row className='flex-column text-center text-white gap-5' >
            <Col lg={12} md={6} xs={12}>
              <h4 className='p-3'>¿Te gustaría hacer una reserva?</h4>
              <h5 className='pb-3'>No te pierdas la oportunidad de aprovechar nuestros servicios y de compartir
                junto a tu familia un momento único.
              </h5>
              <h5 className='pt-3'>¡Haz click en este botón!</h5>
            </Col>
            <Col>
              <Button size='lg' className='mb-5 p-3 px-5' variant='danger'>Reservar mesa</Button>
              <h3 className='p-2'>¡Te esperamos!</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ReservaSection

