import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminScreen from '../pages/Admin/AdminScreen'


function AdminRouter() {
  return ( 
    <Routes>
      <Route path='/admin' element={<AdminScreen/>} />
    </Routes>
  )
}




export default AdminRouter
