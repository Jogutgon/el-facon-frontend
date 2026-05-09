import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Modal, Row, Table, Toast, ToastContainer } from 'react-bootstrap'
import axios from 'axios';
import { API_URL } from '../../common/constants';


function ReservationCrudScreen({ jwt }) {

  const [reservations, setReservations] = useState([]);

  const [modalShow, setModalShow] = useState(false)
  const [selectId, setSelectId] = useState(null)
  const [toastDelete, setToastDelete] = useState(false)
  const [toastUpdate, setToastUpdate] = useState(false)
  const [updateId, setUpdateId] = useState("")
  const [updateDate, setUpdateDate] = useState("")
  const [updateTime, setUpdateTime] = useState("")
  const [updateGuests, setUpdateGuests] = useState("")
  const [availability, setAvailability] = useState([])
  const [search, setSearch] = useState("")
  const [filterDate, setFilterDate] = useState("")


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

  const deleteReservation = async (_id) => {
    try {
      const response = await axios.delete(API_URL + '/admin/delete-reservation/' + _id, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });

    } catch (error) {
      console.error(error)
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
    setToastUpdate(true);
  }

  const handleUpdateCancel = () => {
    setUpdateId("")
  }

  const handleToastClose = () => {
    setToastUpdate(false)
  }

  const handleShow = (_id) => {
    setSelectId(_id);
    setModalShow(true);
  }

  const handleConfirmDelete = async () => {
    await deleteReservation(selectId);
    await getAllReservations();
    handleToastDelete();
    handleClose();
  }

  const handleClose = () => {
    setModalShow(false);
  }

  const handleToastDelete = () => {
    setToastDelete(true);
  }

  const handleToastDelClose = () => {
    setToastDelete(false);
  }

  return (
    <Container className='text-white text-center my-5 py-5'>

      <h3 className='mt-3 mb-4 pb-2'>Reservas confirmadas</h3>

      <Row className='mb-3'>
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text>
              <i class="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
            type='text'
            placeholder='Buscar cliente...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
          </InputGroup>
        </Col>
        <Col md={4}>
        <InputGroup>
          <InputGroup.Text>
          {/* <i class="bi bi-calendar3"></i> */}
          <i class="bi bi-search"></i>

          </InputGroup.Text>
          <Form.Control
          type='date'
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}/>
        </InputGroup>
        </Col>
      </Row>

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
                <td colSpan="6">No hay reservas</td>
              </tr>
            ) : (
              reservations
              .filter( r => {
                const fullName = `${r.user?.firstName || ""} ${r.user?.lastName || ""}`.toLowerCase();
                const matchText = fullName.includes(search.toLowerCase());

                const matchDate = filterDate
                ? r.date.startsWith(filterDate) : true;
                return matchText && matchDate;
              }

              )
              .map((r, index) => (
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
                      title='Eliminar' onClick={() => { handleShow(r._id) }}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              )))}
        </tbody>
      </Table>

      {/* Formulario para actualizar datos */}
      <Row>
        {
          updateId.length > 0 && (
            <>
              <h4>Editando reservas</h4>
              <Form onSubmit={handleSubmitUpdate}>
                <Row className='d-flex justify-content-center'>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type='date' className='text-center'
                      value={updateDate} min={getToday()} max={getMaxDate()}
                      onChange={(e) => {
                        const selectDate = e.target.value;
                        setUpdateDate(selectDate);
                        isAvailable(selectDate);
                      }}
                      required />
                  </Form.Group>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>Hora</Form.Label>
                    <Form.Select value={updateTime} className='text-center'
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
                          ))
                      }
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>Comensales</Form.Label>
                    <Form.Control type='number' value={updateGuests} min={2} max={10} className='text-center'
                      onChange={(e) => setUpdateGuests(e.target.value)} required />
                  </Form.Group>
                  <div className='mt-4'>
                    <Button variant='outline-danger' className='mx-2 px-5'
                      onClick={handleUpdateCancel}>Cancelar</Button>
                    <Button variant='success' className='ms-1'
                      type='submit'>Guardar cambios</Button>
                  </div>
                </Row>
              </Form>
            </>
          )
        }
      </Row>

      {/* Modal eliminar reserva */}
      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea eliminar la reserva?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary" onClick={handleConfirmDelete}>Si, eliminar</Button>
        </Modal.Footer>
      </Modal>

      {/* toast actualizacion */}
      <ToastContainer position='bottom-center' className='p-3'>
        <Toast show={toastUpdate} onClose={handleToastClose} bg='dark'
          delay={3500} autohide >
          <Toast.Header className='bg-success d-flex'>
            <strong className="me-auto text-center">Actualización de reserva</strong>
          </Toast.Header>
          <Toast.Body> ☑ Se actualizaron los datos correctamente.</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* toast eliminar */}
      <ToastContainer position='bottom-center' className='p-3'>
        <Toast show={toastDelete} onClose={handleToastDelClose} bg='dark'
          delay={3500} autohide >
          <Toast.Header className='bg-success d-flex'>
            <strong className="me-auto text-center">Eliminar reserva</strong>
          </Toast.Header>
          <Toast.Body> ☑ La reserva se eliminó correctamente.</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  )
}

export default ReservationCrudScreen
