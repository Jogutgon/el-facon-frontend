import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'


function ReservationCrudScreen() {

  const [reservations, setReservations] = useState([]);

  const getAllReservations = () => {
    try {
      
      

    } catch (error) {
      
    }
  }


  useEffect(() => {

  }, [])



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
          

        </tbody>
      </Table>


    </Container>
  )
}

export default ReservationCrudScreen
