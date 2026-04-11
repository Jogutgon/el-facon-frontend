import { useEffect, useState } from 'react'
import { Button, Container, Modal, Table, Toast, ToastContainer } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../common/constants'

function AllReservationScreen({ jwt }) {

  const [show, setShow] = useState(false)
  const [selectId, setSelectId] = useState(null)
  const [reservations, setReservations] = useState([])
  const [toastShow, setToastShow] = useState(false)


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
    handleToastShow();
    handleClose();
  }

  const handleToastShow = () => {
    setToastShow(true);
  }

  const handleToastClose = () => {
    setToastShow(false)
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
                <td>{reservation.date.split("T")[0]}</td>
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
        <Modal.Body>¿Está seguro que desea cancelar la reserva?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}
          >
            Si
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='bottom-center' className='p-3'>
        <Toast show={toastShow} onClose={handleToastClose} bg='dark'
        delay={3500} autohide >
          <Toast.Header className='bg-success'>
            <strong className="me-auto center">Cancelacion de reserva</strong>
          </Toast.Header>
          <Toast.Body>Se ha cancelado la reserva correctamente.</Toast.Body>
        </Toast>
      </ToastContainer>

    </Container>
  )
}

export default AllReservationScreen
