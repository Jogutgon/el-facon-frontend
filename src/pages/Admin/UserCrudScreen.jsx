import React from 'react'
import { Container, Table } from 'react-bootstrap'


function UserCrudScreen() {




  return (
    <Container className='my-5 py-5 text-white text-center marco'>
      <h1 className=''> Usuarios registrados</h1>

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
        
        
      </tbody>
    </Table>


    </Container>
  )
}

export default UserCrudScreen
