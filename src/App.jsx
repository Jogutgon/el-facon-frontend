import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AdminRouter from './router/AdminRouter';
import UserRouter from './router/UserRouter';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  const [jwt, setJwt] = useState(localStorage.getItem("token") || "")
  const [admin, setAdmin] = useState(false)

  const verifyAdmin = () => {
    try {
      const decodedToken = jwtDecode(jwt)
      setAdmin(decodedToken.isAdmin)
      console.log("Se inicio sesion", decodedToken.email)
    } catch (error) {
      console.error("Error decoding JWT:", error)
    }

  }

  const changeJwt = (value) => {
    setJwt(value)
    localStorage.setItem("token", value)
  }

  useEffect(() => {
    verifyAdmin()
  }, [jwt])



  return (
    <>

      <BrowserRouter>

        <Header authenticated={!!jwt} admin={admin} changeJwt={changeJwt} />

        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen changeJwt={changeJwt} />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/admin/*'
            element={<ProtectedRoute isAllowed={jwt.length > 0 && admin}>
              <AdminRouter />
            </ProtectedRoute>} />
          <Route path='/user/*' element={<ProtectedRoute isAllowed={jwt.length > 0}>
            <UserRouter />
          </ProtectedRoute>} />

        </Routes>
        <Footer authenticated={!!jwt} />

      </BrowserRouter>



    </>
  )
}

export default App
