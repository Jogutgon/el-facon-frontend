import { Col, Container, Row } from 'react-bootstrap'
import separator from '../assets/icons/sep.svg'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'


const fila1 = [
  {src: img1, alt: "Familia almorzando"},
  {src: img2, alt: "Musicos cantando"}, 
  {src: img3, alt: "Asado de carne con papas"}
]
const fila2 = [
  {src: img4, alt: "Postre tradicional"}, 
  {src: img5, alt: "Vinos en mesa"}, 
  {src: img6, alt: "Los Cheffs"}
]


function GalerySection() {

  return (
    <section id='galeria'>
      <img className='sep-icn mt-4 d-block mx-auto' src={separator} alt="separator" />
      <h3 className='fira-sans-thin text-center pt-2 pb-3'>Galeria </h3>
      <Container>
        <Row>
          {fila1.map((item, index) => (
            <Col lg={4} md={6} xs={12} key={index}>
              <img 
              src={item.src} 
              alt={item.alt}
              className='img-fluid p-1' />
            </Col>
          ))}
        </Row>
        <Row className='mb-4'>
          {fila2.map((item, index)=> (
            <Col lg={4} md={6} xs={12} key={index}>
              <img src={item.src} 
              alt={item.alt}
              className='img-fluid p-1' />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default GalerySection

