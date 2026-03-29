import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserScreen from '../pages/User/UserScreen'
import PropTypes from 'prop-types'

function UserRouter( { show = false }) {
  return show ? (
    <Routes>
      <Route path='/' element={<UserScreen/>} />
    </Routes>
  ) : (
    <div className='box'>

      <h1 className='text-white'>Usted no tiene permiso de USUARIO</h1>
    </div>
  )
}

UserRouter.propTypes= {
  show: PropTypes.bool.isRequired
}

export default UserRouter
