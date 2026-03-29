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
      const decodedToken = jwtDecode(jwtFromLogin)
      setJwt(jwtFromLogin)
      setAdmin(decodedToken.isAdmin)
    } catch (error){
      console.error("Error decoding JWT:", error)
    }

  }

  const changeJwt = (value) => {
    setJwt(value)
  }



  useEffect(() => {
    verifyAdmin()
  }, [jwt])
  
  


  return (
    <>

     

      <BrowserRouter>
      
    <Header/>

          <Routes>
            <Route path='/' element={<HomeScreen/>}  />
            <Route path='/login' element={<LoginScreen changeJwt={changeJwt} />}  />
            <Route path='/register' element={<RegisterScreen/>}  /> 
            <Route path='/admin/*' element={<AdminRouter show={jwt.length > 0 && admin === true}/>} />
            <Route path='/user/*' element={<UserRouter show={jwt.length > 0} />} />

          </Routes>
          <Footer/> 
      
      </BrowserRouter>
      
      
   
    </>
  )
}

export default App
