import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import errImg from '../assets/img/404elfacon.png'
import '../styles/NotFoundScreen.css'
import { Link } from 'react-router-dom'

function NotFoundScreen() {
    return (
        <Container className='my-5 py-4'>
            <Row className='align-items-center min-vh-75'>
                <Col md={6} className='text-center'>
                    <img src={errImg} alt="notfound" className='img-fluid' />
                </Col>
                
                <Col md={6} className='d-flex flex-column justify-content-center'>
                <h2 className='text-white text-center fs-1'>Página no encontrada</h2>
                <div className='d-flex justify-content-center mt-3'>
                    <Link to='/' className='btn btn-dark mt-3 px-4 py-3'> Volver al inicio </Link>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundScreen
