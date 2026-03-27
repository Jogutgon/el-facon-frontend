import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import LoginScreen from './pages/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
 
  return (
    <>

      <BrowserRouter>
      
    <Header/>

          <Routes>
            <Route path='/' element={<HomeScreen/>}  />
            <Route path='/login' element={<LoginScreen/>}  />
            <Route path='/register' element={<RegisterScreen/>}  /> 

          </Routes>
          <Footer/> 
    

    

    

    
      </BrowserRouter>
      
      
   
    </>
  )
}

export default App
