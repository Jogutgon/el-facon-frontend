import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import errImg from '../assets/img/404elfacon.png'
import '../styles/NotFoundScreen.css'

function NotFoundScreen() {
    return (
        <Container className=' notFound'>
            <Row className='d-flex'>
                <Col md={6} className=''>
                    <img src={errImg} alt="notfound" className='img404' />
                </Col>
                
                <Col md={6} className='d-flex flex-column justify-content-center '>
                <h2 className='text-white text-center  '>Página no encontrada</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundScreen
