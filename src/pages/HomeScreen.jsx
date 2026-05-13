import ContactSection from "../components/ContactSection"
import GalerySection from "../components/GalerySection"
import MainSection from "../components/MainSection"
import ReservaSection from "../components/ReservaSection"


function HomeScreen({authenticated, admin}) {
  return (
    <>
      <MainSection/>
      <GalerySection/>
      <ContactSection/>
      <ReservaSection authenticated={authenticated} admin={admin}/>
    </>
  )
}

export default HomeScreen
