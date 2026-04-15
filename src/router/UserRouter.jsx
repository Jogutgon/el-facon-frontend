
import { Route, Routes } from 'react-router-dom'
import UserScreen from '../pages/User/UserScreen'
import ReservationScreen from '../pages/User/ReservationScreen'
import AllReservationScreen from '../pages/User/AllReservationScreen'





function UserRouter( {jwt}) {
  return (
    <Routes>
      <Route path='/' element={<UserScreen />}  />
      <Route path='/reservations' element={<AllReservationScreen jwt={jwt} />} />
      <Route path='/reservations/new' element={<ReservationScreen jwt={jwt}/>} />
      
    </Routes>
  )
}


export default UserRouter
