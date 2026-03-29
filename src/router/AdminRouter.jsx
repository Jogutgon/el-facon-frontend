import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminScreen from '../pages/Admin/AdminScreen'
import CrudScreen from '../pages/Admin/CrudScreen'
import PropTypes from 'prop-types'

function AdminRouter( {show = false} ) {
  return show ? ( 
    <Routes>
      <Route path='/' element={<AdminScreen/>}  />
      <Route path='/crud' element={<CrudScreen/>} />
    </Routes>
  ) : (
    <div className='box'>

      <h1 className='text-white'>Usted no tiene permiso de Administrador</h1>
    </div>
  )
}

AdminRouter.propTypes = {
  show: PropTypes.bool.isRequired
}



export default AdminRouter
