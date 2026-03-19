import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import GalerySection from './components/GalerySection';
import ContactSection from './components/ContactSection';
import ReservaSection from './components/ReservaSection';



function App() {
 

  return (
    <>
      <Header/>
      <MainSection />
      <GalerySection/>
      <ContactSection/>
      <ReservaSection/>
      
      <Footer/>
      {/* <div style={{ marginTop: "80px" }}></div> */}
    </>
  )
}

export default App
