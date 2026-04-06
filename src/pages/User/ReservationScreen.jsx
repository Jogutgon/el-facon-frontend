import React, { useState } from 'react'
import '../../styles/ReservationStyles.css'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import axios from 'axios'

function ReservationScreen({ jwt }) {

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")
  const [availability, setAvailability] = useState([])


  const handleSubtmitForm = async (event) => {
    event.preventDefault()

    try {

      const response = await axios.post(
        "http://localhost:7000/reservation",
        { date, time, guests },
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );


      setDate("");
      setTime("");
      setGuests("");


    } catch (error) {
      console.error(error);
      alert("Error al crear la reserva")
    }

  }



  return (
    <Container className='reserv-page text-light cajaGREEN'>

      <h1 className=' text-white'>Realizar reserva</h1>

      <Form className='mt-5' onSubmit={handleSubtmitForm}>

        <Row >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Selecciona una fecha</Form.Label>
            <Form.Control type="date" value={date}
              onChange={(e) => setDate(e.target.value)} required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Horario</Form.Label>
            <Form.Control type="time" value={time}
              onChange={(e) => setTime(e.target.value)} required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Comensales</Form.Label>
            <Form.Control type='number' value={guests} min={2} max={12}
              onChange={(e) => setGuests(e.target.value)} required />
          </Form.Group>
        </Row>
        <div className='d-flex justify-content-center mt-5'>
          <Button variant='success' type="submit">Confirmar Reserva</Button>
        </div>
      </Form>

    </Container>
  )
}

export default ReservationScreen
