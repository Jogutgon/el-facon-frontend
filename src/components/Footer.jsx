import logo from '../assets/icons/logo.svg'
import logof from '../assets/icons/facebook.png'
import logoi from '../assets/icons/instagram.png'
import logow from '../assets/icons/whatsapp.png'
import '../styles/HomeStyles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0 fira-sans-thin">
                        <h6>Visitanos:</h6>
                        <p className="mb-1">
                            <i className="bi bi-geo-fill me-2"></i>
                            San Javier, Tucumán</p>
                        <p className="mb-1">
                            <i className="bi bi-phone-vibrate me-2"></i>
                             +54 9 381 000 0000</p>
                        <p className="mb-0">
                            <i className="bi bi-clock-history me-2"></i>
                             Lun-Dom 12:00-00:00</p>
                    </div>
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0 ">
                        <img
                            src={logo}
                            className="img-fluid"
                            style={{maxWidth: "160px"}}
                            alt="Logo"
                        />
                    </div>
                    <div className="col-12 col-md-4 text-center fira-sans-thin">
                        <h6 className='mb-3'>Nuestras redes:</h6>
                        <div className='d-flex justify-content-center gap-4'>
                            <img src={logof} alt="logo facebook" className='logos' />
                            <img src={logoi} alt="logo instagram" className='logos' />
                            <img src={logow} alt="logo whatsapp" className='logos' />
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-4 mb-0 fira-sans-thin">© 2026 Josefina Gutierrez Gonzalez. All rights reserved</p>
        </footer>
    )
}

export default Footer


