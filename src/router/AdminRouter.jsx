import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminScreen from '../pages/Admin/AdminScreen'
import CrudScreen from '../pages/Admin/CrudScreen'

function AdminRouter() {
  return (
    <Routes>
      <Route path='/' element={<AdminScreen/>}  />
      <Route path='/crud' element={<CrudScreen/>} />
    </Routes>
  )
}

export default AdminRouter
