import { useEffect, useState } from 'react'
import { Button, Container, Modal, Table, Toast } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../common/constants'

function AllReservationScreen({ jwt }) {

  const [show, setShow] = useState(false)
  const [selectId, setSelectId] = useState(null)
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
        });




    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (_id) => {
    setSelectId(_id);
    setShow(true);
  }

  const handleConfirmDelete = async () => {
    await deleteReservation(selectId);
    await getAllReservations();
    handleClose();

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
                    handleShow(reservation._id)
                  }}>Cancelar Reserva</Button> </td>
              </tr>
            ))
          }


        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Confima que desea cancelar la reserva?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      
    </Container>
  )
}

export default AllReservationScreen
