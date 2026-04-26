import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminScreen from '../pages/Admin/AdminScreen'
import ReservationCrudScreen from '../pages/Admin/ReservationCrudScreen'
import UserCrudScreen from '../pages/Admin/UserCrudScreen'


function AdminRouter( {jwt}) {
  return ( 
    <Routes>
      <Route path='/' element={<AdminScreen/>} />
      
      <Route path='/users' element={<UserCrudScreen jwt={jwt} />} />
      
      <Route path='/reservations' element={<ReservationCrudScreen jwt={jwt} />} />
    </Routes>
  )
}




export default AdminRouter
