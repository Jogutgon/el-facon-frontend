import React from 'react'
import logo from '../assets/icons/logo.svg'

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
                    <div className="col">
                        Column
                    </div>
                </div>
            </div>


            <p className="mb-0">© 2026 Mi sitio</p>
        </footer>
    )
}

export default Footer
