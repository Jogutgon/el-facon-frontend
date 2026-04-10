import { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../common/constants'

function AllReservationScreen( {jwt}) {

  const [reservations, setReservations] = useState([])

  const getAllReservations = async () => {
    try {
      const response = await axios.get(API_URL + "/reservation/all-reservations", 

      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
      );
      setReservations(response.data)

    } catch (error) {
      console.error(error);
    }
  }

  const deleteReservation = async (_id) => {
    try {
      
      const response = await axios.delete(API_URL + "/reservation/delete-by-id/" + _id,
        {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }  );

      

      
    } catch (error) {
      
    }
  }

  const handleDeleteReservation = async (_id) => {
    await deleteReservation(_id),
    await getAllReservations()
  }
  

  useEffect(() => { 
    getAllReservations()
  }, [])


  return (
    <Container className='reserv-page text-white'>
      <h1>Mis reservas</h1>
      <p>tablita turururu</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Comensales</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>

          {
            reservations.map((reservation) => (
              <tr key={reservation._id} >
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.guests}</td>
                <td> <Button variant='danger'
                onClick={() => {
                  handleDeleteReservation(reservation._id)
                }}>Cancelar Reserva</Button> </td>
              </tr>
            ))
          }
          
                   
        </tbody>
      </Table>



    </Container>
  )
}

export default AllReservationScreen
