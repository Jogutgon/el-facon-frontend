import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../../common/constants'


function UserCrudScreen( {jwt} ) {

  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    try {

      const response = await axios.get( API_URL + '/admin/users', {
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

  useEffect(() => {
    getAllUsers();
  }, [])



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
        </tr>
      </thead>

      <tbody>
        {
          users.map( (user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.status ? 'Activo' : 'Inactivo'}</td>
            </tr>
          ))
        }
        
      </tbody>
    </Table>


    </Container>
  )
}

export default UserCrudScreen
