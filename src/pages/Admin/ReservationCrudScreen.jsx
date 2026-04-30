import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios';
import { API_URL } from '../../common/constants';


function ReservationCrudScreen( {jwt} ) {

  const [reservations, setReservations] = useState([]);

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


  useEffect(() => {
    if(!jwt) return;
    getAllReservations();
  }, [jwt]);



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
          </tr>
        </thead>
        <tbody>
          {
            reservations.length === 0 ? (
              <tr>
                <td colSpan="5">No hay reservas</td>
              </tr>
            ) : (
              reservations.map((r, index)=> (
              <tr key={r._id}>
                <td>{index + 1}</td>
                <td>{r.user.firstName} {r.user.lastName}</td>
                <td>{new Date(r.date).toLocaleDateString()}</td>
                <td>{r.time}</td>
                <td>{r.guests}</td>

              </tr>
            ))
            )
          }

        </tbody>
      </Table>


    </Container>
  )
}

export default ReservationCrudScreen
