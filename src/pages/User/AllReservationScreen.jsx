import { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../common/constants'

function AllReservationScreen( {jwt}) {

  const [reservation, setReservation] = useState([])

  const getAllReservations = async ( _id ) => {
    try {
      const response = await axios.get(API_URL + "/reservation/all-reservations", 

      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
      );
      setReservation(response.data)

    } catch (error) {
      console.error(error);
    }
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
            reservation.map((reservation) => (
              <tr key={reservation._id} >
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.guests}</td>
                <td> <Button variant='danger'>Cancelar</Button> </td>
              </tr>
            ))
          }
          
                   
        </tbody>
      </Table>



    </Container>
  )
}

export default AllReservationScreen
