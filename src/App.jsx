
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/MainSection';

function App() {
 

  return (
    <>
      <Header/>
      <MainSection/>
      <GalerySection/>
      <ContactSection/>
      <ReservaSection/>
      
      <div style={{ marginTop: "80px" }}>
      <Footer/>
        
      </div>
    </>
  )
}

export default App
