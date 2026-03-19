import logo from '../assets/icons/logo.svg'
import logof from '../assets/icons/facebook.png'
import logoi from '../assets/icons/instagram.png'
import logow from '../assets/icons/whatsapp.png'
import '../styles/HomeStyles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
    return (
        <footer className="bg-dark text-white text-center">
            <div className="container pt-3">
                <div className="row">
                    <div className="col text-center pt-4 fira-sans-thin">
                        <h6>Visitanos:</h6>
                        <p className="mb-1">
                            <i class="bi bi-geo-fill me-3"></i>
                            San Javier, Tucumán</p>
                        <p className="mb-1">
                            <i class="bi bi-phone-vibrate me-3"></i>
                             +54 9 381 000 0000</p>
                        <p className="mb-0">
                            <i class="bi bi-clock-history me-1"></i>
                             Lun-Dom 12:00-00:00</p>
                    </div>




                    <div className="col d-flex justify-content-center ">
                        <img
                            src={logo}
                            className="d-inline-block align-top img-fluid"
                            width="200"
                            height="100"
                            alt="Logo"
                        />
                    </div>
                    <div className="col flex-column">
                        <h6 className='fira-sans-thin pt-4'>Nuestras redes:</h6>
                        <div className='d-flex justify-content-around m-4'>
                            <img src={logof} alt="logo facebook" className='logos' />
                            <img src={logoi} alt="logo instagram" className='logos' />
                            <img src={logow} alt="logo whatsapp" className='logos' />
                        </div>
                    </div>
                </div>
            </div>
            <p className="col fira-sans-thin flex-column mt-2">© 2026 Josefina Gutierrez Gonzalez. All rights reserved</p>
        </footer>
    )
}

export default Footer
