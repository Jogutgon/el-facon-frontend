import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import axios from 'axios';
import { API_URL } from '../../common/constants';


function ReservationCrudScreen({ jwt }) {

  const [reservations, setReservations] = useState([]);

  const [updateId, setUpdateId] = useState("")
  const [updateDate, setUpdateDate] = useState("")
  const [updateTime, setUpdateTime] = useState("")
  const [updateGuests, setUpdateGuests] = useState("")
  const [availability, setAvailability] = useState([])



  const getAllReservations = async () => {
    try {

      const response = await axios.get(API_URL + '/admin/reservations', {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
      );

      setReservations(response.data.data)

    } catch (error) {
      console.error(error)
    }
  }

  const isAvailable = async (selectDate) => {
    try {

      const response = await axios.get(
        API_URL + `/reservation/availability?date=${selectDate}`,
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

  const updateReservation = async () => {
    try {
      const response = await axios.put(API_URL + '/admin/update-reservation/' + updateId, {
        "date": updateDate,
        "time": updateTime, 
        "guests": updateGuests
      }, 
    {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
    
    console.log("Respuesta update:", response.data);

    } catch (error) {
      console.error("Error update:", error.response?.data || error);
    }
  }

  


  useEffect(() => {
    if (!jwt) return;
    getAllReservations();
  }, [jwt]);

  const formatDate = (date) => {
    const [year, month, day] = date.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
  };


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
    if (!updateDate) return false;
    const now = new Date();
    const selectDateTime = new Date(`${updateDate}T${time}`);
    return selectDateTime < now
  }

  const handleSubmitUpdate = async (event) => {
    event.preventDefault()
    await updateReservation()
    await getAllReservations()
    setUpdateId("")
    setUpdateDate("")
    setUpdateTime("")
    setUpdateGuests("")
  }




  return (
    <Container className='text-white text-center marco my-5 py-5'>

      <h1 className='my-4'>Reservas confirmadas</h1>

      {/* Tabla de reservas */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre y apellido</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Comensales</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {
            reservations.length === 0 ? (
              <tr>
                <td colSpan="5">No hay reservas</td>
              </tr>
            ) : (
              reservations.map((r, index) => (
                <tr key={r._id}>
                  <td>{index + 1}</td>

                  <td>{r.user
                    ? `${r.user.firstName} ${r.user.lastName}`
                    : 'Usuario eliminado'
                  }</td>

                  <td>{formatDate(r.date)}</td>
                  <td>{r.time}</td>
                  <td>{r.guests}</td>

                  <td>
                    <Button variant='outline-primary' className='me-1'
                      title='Editar'
                      onClick={() => {
                        // tengo que pedir disponibilidad de la hora, no la estoy pidiendo y es availibility

                      const formattedDate = r.date.split('T')[0];
                        setUpdateId(r._id);
                        setUpdateDate(formattedDate);
                        setUpdateTime(r.time);
                        setUpdateGuests(r.guests);

                        isAvailable(formattedDate);

                      }}>
                      <i className="bi bi-pencil-square"></i>
                    </Button>

                    <Button variant='outline-danger' className='ms-1'
                      title='Eliminar'>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>

                </tr>
              ))
            )
          }

        </tbody>
      </Table>

      {/* Formulario para actualizar datos */}
      <Row>
        {
          updateId.length > 0 && (
            <Form onSubmit={handleSubmitUpdate}>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control type='date'
                    value={updateDate} min={getToday()} max={getMaxDate()}
                    onChange={(e) => {
                      const selectDate = e.target.value;
                      setUpdateDate(selectDate);
                      isAvailable(selectDate);

                    }}
                    required />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Hora</Form.Label>
                  <Form.Select value={updateTime}
                    onChange={(e) => setUpdateTime(e.target.value)}
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

                <Form.Group as={Col}>
                  <Form.Label>Comensales</Form.Label>
                  <Form.Control type='number' value={updateGuests} min={2} max={10}
                    onChange={(e) => setUpdateGuests(e.target.value)} required />
                </Form.Group>
                <div>
                  <Button variant='success'
                  type='submit'>Guardar</Button>
                </div>
              </Row>
            </Form>
          )
        }
      </Row>


    </Container>
  )
}

export default ReservationCrudScreen
