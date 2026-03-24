import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import RegisterScreen from './pages/RegisterScreen';






function App() {
 
  return (
    <>
      
    <Header/>
    <HomeScreen/>

    {/* <RegisterScreen/> */}

    <Footer/> 
      
   {/* prox tarea agregar Rutas --> react-router-dom */}
    </>
  )
}

export default App
