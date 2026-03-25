import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <>
        
           
            <nav className="navbar navbar-expand-lg" >
                <div className="container">

                    <Link className="navbar-brand" to="/" style={{ color: "#000000", fontFamily: "'carton'", }}>Home</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#000000", fontFamily: "'carton'", }}>
                                    Browse
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" >Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#000000", fontFamily: "'carton'", }}>
                                    Kids
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' aria-current="page" to="/misterio"  style={{ color: "#000000", fontFamily: "'carton'", }}>Terror</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/Terror" style={{ color: "#000000", fontFamily: "'carton'", }} >Misterio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/Suspenso" style={{ color: "#000000", fontFamily: "'carton'", }} >Suspenso</Link>
                            </li>

                        </ul>
                        <div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">🔔</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}