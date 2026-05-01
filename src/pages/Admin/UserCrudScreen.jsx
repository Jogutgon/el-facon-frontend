import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../common/constants'



function UserCrudScreen({ jwt }) {

  const [showModal, setShowModal] = useState(false)
  const [selectId, setSelectId] = useState(null)

  const [users, setUsers] = useState([])

  const [updateId, setUpdateId] = useState("")

  const [updateName, setUpdateName] = useState("")
  const [updateLastName, setUpdateLastName] = useState("")
  const [updateUsername, setUpdateUsername] = useState("")
  const [updateEmail, setUpdateEmail] = useState("")


  const getAllUsers = async () => {
    try {

      const response = await axios.get(API_URL + '/admin/users', {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }
      );

      setUsers(response.data.data)

    } catch (error) {
      console.error(error)
    }
  }

  const updateUser = async () => {
    try {

      const response = await axios.put(API_URL + '/admin/users/' + updateId, {
        "firstName": updateName,
        "lastName": updateLastName,
        "email": updateEmail,
        "username": updateUsername
      },
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        }
      );

      console.log(response.data)


    } catch (error) {
      console.error(error)
    }
  }

  const changeStatusUser = async(user) => {
    try {

      const response = await axios.patch(API_URL + `/admin/users/${user._id}/status`, {
        status: !user.status
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })

      setUsers(users.map(u => 
        u._id === user._id ? response.data.data : u
      ));

    } catch (error) {
      console.error(error)
    }
  }


 
  const deleteUser = async (_id) => {
    try {
      const response = await axios.delete(API_URL + '/admin/deleteUser-by-id/' + _id, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }

      })

      setUsers(users.filter(u => u._id !== id));

    } catch (error) {
      console.error(error)
    }
  }


  

  useEffect(() => {

    if (!jwt) return;
    getAllUsers();
  }, [jwt])




  // Handlers

  const handleSubmitUpdate = async () => {
    await updateUser();
    await getAllUsers();
    setUpdateId("")
    setUpdateName("")
    setUpdateLastName("")
    setUpdateUsername("")
    setUpdateEmail("")
  }

  const handleClose = async () => {
    setShowModal(false);
  }

   const handleShow = (_id) => {
    setSelectId(_id);
   setShowModal(true) ;
  }

  

  const handleConfirmDelete = async () => {
    await deleteUser(selectId);
    await getAllUsers();
    handleClose()
  }


  return (
    <Container className='my-5 py-5 text-white text-center marco'>
      <h1 className='my-3 pb-2'> Usuarios registrados</h1>

      {/* Tabla */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>
          {
            users.length === 0 ? (
              <tr>
                <td colSpan='7'>No hay usuarios</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.status ? 'Activo' : 'Inactivo'}</td>
                  <td>

                    <Button variant='outline-primary' className='me-1'
                    title='Editar'
                      onClick={() => {
                        setUpdateId(user._id)
                        setUpdateName(user.firstName)
                        setUpdateLastName(user.lastName)
                        setUpdateUsername(user.username)
                        setUpdateEmail(user.email)
                      }}>
                      <i className="bi bi-pencil-square"></i>
                    </Button>

                    <Button variant={user.status ? 'outline-success' : 'secondary'} className='mx-1'
                    title={user.status ? 'Desactivar usuario' : 'Activar usuario'}
                    onClick={() => changeStatusUser(user)}>
                      <i className={ `bi ${user.status ? 'bi-person-fill-check' : 'bi-person-fill-slash'}`}></i>
                    </Button>

                    <Button variant='outline-danger' className='ms-1'
                    title='Eliminar'
                    onClick={() => handleShow(user._id)}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              ))
            )
          }

        </tbody>
      </Table>

      {/* formulario para actualizar */}

      <Row className='mt-4'>
        {
          updateId.length > 0 && (
            <>
              <h4>Editando Usuario:</h4>

              <Form >

                <Row className='d-flex justify-content-around'>
                  <Form.Group as={Col} md='5' className="mb-2" controlId="formBasicFirstName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"
                      placeholder="Actualizar nombre"
                      value={updateName}
                      onChange={(event) => setUpdateName(event.target.value)} />
                  </Form.Group>
                  <Form.Group as={Col} md='5' className="mb-2" controlId="formBasicLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Actualizar apellido"
                      value={updateLastName}
                      onChange={(event) => { setUpdateLastName(event.target.value) }} />
                  </Form.Group>
                </Row>

                <Row className='d-flex justify-content-around'>
                  <Form.Group as={Col} md='5' className="mb-2" controlId="formBasicUsername">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Actualizar nombre de usuario"
                      value={updateUsername}
                      onChange={(event) => setUpdateUsername(event.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} md='5' className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Actualizar email"
                      value={updateEmail}
                      onChange={(event) => setUpdateEmail(event.target.value)} />
                  </Form.Group>
                </Row>
                <div className='mt-4'>
                  <Button className='mx-2 px-5' variant='outline-danger'
                    onClick={() => {
                      setUpdateId("")
                      setUpdateName("")
                      setUpdateLastName("")
                      setUpdateUsername("")
                      setUpdateEmail("") }}>Cancelar</Button>
                  <Button className='mx-2' variant='success' onClick={handleSubmitUpdate}>Guardar cambios</Button>
                </div>

              </Form>
            </>
          )
        }
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea eliminar el usuario?</Modal.Body>
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


    </Container>
  )
}

export default UserCrudScreen
