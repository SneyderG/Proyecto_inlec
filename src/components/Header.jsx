import { useState } from "react"
import "../stylesheets/Header.css"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (

        <nav className="navbar navbar-expand-lg bg-wave fixed-top">

            <div className="container gap-3">

                {/* Logo */}
                <a href="#inicio">
                    <img height="50" src="./loi.png" alt="logo" />
                </a>


                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Links */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        {/* INICIO */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#inicio"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: "#000",
                                    fontFamily: "carton"
                                }}
                            >
                                <h5 className="tipo-grafia">Inicio</h5>
                            </a>
                        </li>


                        {/* CAPITULOS */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#capitulos"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: "#000",
                                    fontFamily: "carton"
                                }}
                            >
                                <h5 className="tipo-grafia">Capítulos</h5>
                            </a>
                        </li>


                        {/* PERSONAJES */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#personajes"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: "#000",
                                    fontFamily: "carton"
                                }}
                            >
                                <h5 className="tipo-grafia">Personajes</h5>
                            </a>
                        </li>


                        {/* SOBRE NOSOTROS */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#sobre-nosotros"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: "#000",
                                    fontFamily: "carton"
                                }}
                            >
                                <h5 className="tipo-grafia">Sobre nosotros</h5>
                            </a>
                        </li>


                    </ul>


                    {/* Search */}
                    <form className="d-flex">

                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                        />

                    </form>

                </div>

            </div>

        </nav>

    )
}