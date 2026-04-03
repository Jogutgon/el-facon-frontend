
import { Route, Routes } from 'react-router-dom'
import UserScreen from '../pages/User/UserScreen'
import ReservationScreen from '../pages/User/ReservationScreen'





function UserRouter() {
  return (
    <Routes>
      <Route path='/' element={<UserScreen/>}  />
      <Route path='/myreservation' element={<ReservationScreen/>} />
      
    </Routes>
  )
}


export default UserRouter
