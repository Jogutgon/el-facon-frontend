import React, { useState } from 'react'
import '../../styles/ReservationStyles.css'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import axios from 'axios'

function ReservationScreen({ jwt }) {

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")
  const [availability, setAvailability] = useState([])

  const isAvailable = async (selectDate) => {
    try {

      const response = await axios.get(
        `http://localhost:7000/reservation/availability?date=${selectDate}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );

      setAvailability(response.data);

    } catch (error) {
      console.error(error);
    }
  }

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

  const getToday = () => {
    const today = new Date()
    return today.toJSON().split("T")[0]
  }

  const getMaxDate = () => {
    const max = new Date()
    max.setDate(max.getDate() + 3)
    return max.toJSON().split("T")[0]
  }

  const isPastHour = (time) => {
    if (!date) return false;
    const now = new Date();
    const selectDateTime = new Date(`${date}T${time}`);
    return selectDateTime < now
  }


  return (
    <Container className='reserv-page text-light cajaGREEN'>

      <h1 className=' text-white'>Realizar reserva</h1>

      <Form className='mt-5' onSubmit={handleSubtmitForm}>

        <Row >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Selecciona una fecha</Form.Label>
            <Form.Control type="date"
              value={date} min={getToday()} max={getMaxDate()}
              onChange={(e) => {
                const selectDate = e.target.value;
                setDate(selectDate);
                isAvailable(selectDate);

              }}
              required />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Selecciona un horario</Form.Label>
            <Form.Select value={time}
              onChange={(e) => setTime(e.target.value)}
              required>

              <option value=""> Horarios </option>
              {
                availability.filter(hour => !isPastHour(hour.time))
                .map((hour) => (
                    <option
                      key={hour.time}
                      value={hour.time}
                      disabled={!hour.available}

                    > {hour.time} {!hour.available ? "(Reservado)" : ""} </option>
                  )
                )
              }

            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Número de comensales</Form.Label>
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
