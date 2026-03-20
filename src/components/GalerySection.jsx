import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import separator from '../assets/icons/sep.svg'

function GalerySection() {
  return (
    <section id='galeria'>
      <img className='sep-icn mt-5 d-block mx-auto' src={separator} alt="separator" />
      <h3 className='fira-sans-thin text-center p-5'>Galeria </h3>
      <Container>
        <Row className='grilla'>
          <Col className='caja'></Col>
          <Col className='caja'></Col>
          <Col className='caja'></Col>
        </Row>
        
        <Row className='grilla'>
          <Col className='caja'></Col>
          <Col className='caja'></Col>

          <Col className='caja'></Col>

        </Row>
      </Container>
    </section>
  )
}

export default GalerySection

