import React from 'react'
import logo from '../assets/icons/logo.svg'
import logof from '../assets/icons/facebook.png'
import logoi from '../assets/icons/instagram.png'
import logow from '../assets/icons/whatsapp.png'
import '../styles/HomeStyles.css'


function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container text-center ">
                <div className="row">
                    <div className="col text-white">
                        Column
                    </div>
                    <div class="col">
                        <img
                                      src={logo}
                                      className="d-inline-block align-top img-fluid"
                                      width="200"
                                      height="100"
                                      alt="Logo"
                                    />
                    </div>
                    <div className="col d-flex justify-content-around pt-5 align-center">
                        <img src={logof} alt="logo facebook" className='logos' />
                        <img src={logoi} alt="logo instagram" className='logos' />
                        <img src={logow} alt="logo whatsapp" className='logos' />
                    </div>
                </div>
            </div>

            <p className='mb-0'>Josefina Gutierrez Gonzalez</p>
            <p className="mb-0">© 2026</p>
        </footer>
    )
}

export default Footer
