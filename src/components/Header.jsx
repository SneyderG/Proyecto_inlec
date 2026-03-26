import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/Header.css"


export const Header = () => {
    return (
        <>
        
           
            <nav className="navbar navbar-expand-lg bg-wave" >
                <div className="container gap-3" >
                    <img height="50" src="./loi.png" alt="" />

                    <Link className="navbar-brand" to="/" style={{ color: "#000000", fontFamily: "'carton'", }}>Inicio</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' aria-current="page" to="/misterio"  style={{ color: "#000000", fontFamily: "'carton'", }}>Sobre nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/Terror" style={{ color: "#000000", fontFamily: "'carton'", }} >Capitulos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/Suspenso" style={{ color: "#000000", fontFamily: "'carton'", }} >Mas informacion</Link>
                            </li>

                        </ul>
                        <div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                               
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}