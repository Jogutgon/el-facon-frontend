import { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios'

function AllReservationScreen( {jwt}) {

  const [reservation, setReservation] = useState([])

  

  useEffect(() => { 
    // functraerreservas()
  }, [])


  return (
    <Container className='reserv-page text-white'>
      <h1>Mis reservas</h1>
      <p>tablita turururu</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Comensales</th>
          </tr>
        </thead>

        <tbody>
          
          <tr>
            <td>1</td>
            
          </tr>
          
        </tbody>
      </Table>



    </Container>
  )
}

export default AllReservationScreen
