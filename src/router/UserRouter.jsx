
import { Route, Routes } from 'react-router-dom'
import UserScreen from '../pages/User/UserScreen'


function UserRouter() {
  return (
    <Routes>
      <Route path='/user' element={<UserScreen/>}  />
    </Routes>
  )
}


export default UserRouter
