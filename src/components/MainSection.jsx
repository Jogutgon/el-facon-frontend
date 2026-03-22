import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


function MainSection() {
    return (


        <section id='quienes-somos' className='main-section'>
            <div className='overlay'>
                <Container>
                    <Row className='justify-content-center align-items-center fira-sans-thin'>
                        <Col lg={8} md={6} xs={12}  className='text-center'>
                            <h1 className='fira-sans-thin py-4' >¿Quiénes somos?</h1>
                            <p>
                                Bienvenidos al Restaurante "El Facón", situada en el punto más emblemático de San Javier, Tucumán.
                                El prestigio de nuestra cocina se sustenta en el legado de generaciones que han
                                custodiado los secretos del fuego y la tierra.
                            </p>

                            <p>
                                Inspirados en el Facón, pieza fundamental de la orfebrería y la destreza gaucha, nuestra identidad se forja bajo los mismos valores:
                                fuerza, nobleza y una utilidad elevada a la categoría de arte. En nuestro salón, el lujo no es solo un entorno,
                                sino una experiencia sensorial diseñada para quienes aprecian la identidad argentina en su máxima expresión.

                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>



        </section>

    )
}

export default MainSection
