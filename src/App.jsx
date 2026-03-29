import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AdminRouter from './router/AdminRouter';
import UserRouter from './router/UserRouter';


function App() {

  const [jwt, setJwt] = useState("")
  const [admin, setAdmin] = useState(false)

  const verifyAdmin = () => {
    try {
      const jwtFromLogin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5Yzg2YzU3MTAzNDE3MDkyMzcyYjg0ZCIsInVzZXJuYW1lIjoidXN1YXJpbzEiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzc0NzQyNjcxfQ.LIU_zP5SUjK-P_I5I-NKXiSmaQrz5xOJTdVaLqvjZuE"
      const decodedToken = jwtDecode(jwtFromLogin)
      setJwt(jwtFromLogin)
      setAdmin(decodedToken.isAdmin)
    } catch (error){
      console.error("Error decoding JWT:", error)
    }

  }



  useEffect(() => {
    verifyAdmin()
  }, [])
  
  


  return (
    <>

     

      <BrowserRouter>
      
    <Header/>

          <Routes>
            <Route path='/' element={<HomeScreen/>}  />
            <Route path='/login' element={<LoginScreen/>}  />
            <Route path='/register' element={<RegisterScreen/>}  /> 
            <Route path='/admin/*' element={<AdminRouter/>} />
            <Route path='/user/*' element={<UserRouter />} />

          </Routes>
          <Footer/> 
      
      </BrowserRouter>
      
      
   
    </>
  )
}

export default App
