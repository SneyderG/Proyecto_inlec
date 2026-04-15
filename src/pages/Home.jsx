import React, { useState } from 'react'
import { Header } from '../components/Header'
import "../stylesheets/Home.css"

export const Home = () => {

    const [mostrarModal, setMostrarModal] = useState(false)

    return (

        <>

            <Header />

            {mostrarModal && (
                <div
                    onClick={() => setMostrarModal(false)}
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "#fff8f0",
                            border: "3px solid #5c3a21",
                            borderRadius: "16px",
                            padding: "2rem",
                            maxWidth: "420px",
                            width: "90%",
                            textAlign: "center",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
                        }}
                    >
                        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}></div>

                        <h4 className="tipo-grafia" style={{ color: "#c67c00", marginBottom: "0.75rem" }}>
                            Bienvenido a INLEC
                        </h4>

                        <p className="tipo-grafo" style={{ color: "#555", marginBottom: "1rem", lineHeight: "1.7" }}>
                            INLEC es un proyecto que transforma la lectura en una aventura interactiva.
                            Descubre capítulos animados, conoce a los personajes y vive cada historia
                            de una forma totalmente nueva a través de animaciones y cómics digitales.
                        </p>

                        <button
                            className="btn btn-warning"
                            onClick={() => setMostrarModal(false)}
                            style={{ borderRadius: "20px", padding: "6px 28px" }}
                        >
                            ¡Entendido!
                        </button>
                    </div>
                </div>
            )}

            <div id="inicio">
                <div className="container mt-5">
                    <div className="row pb-5">
                        <div className="col-12 mt-3 pt-5">

                            <div>
                                <h3 className="tipo-grafia text-center">
                                    QUE BUSCAMOS
                                </h3>
                                <p className="tipo-grafo text-center">
                                    En nuestro proyecto buscamos revolucionar la lectura donde se pueda <br />
                                    convertir en una experiencia interactiva <br />
                                    por medio de animaciones que harán que cada usuario pueda explorar INLEC.
                                </p>
                            </div>

                            <div className="row align-items-center mt-4">
                                <div className="col-12 col-md-6 text-center">
                                    <img className="img-fluid" src="./foxi.png" alt="Foxy" />
                                </div>

                                <div className="col-12 col-md-6 mt-4 mt-md-0">
                                    <h3 className="tipo-grafia text-center pt-md-5">
                                        QUE ES INLEC
                                    </h3>
                                    <p className="tipo-grafo text-center mt-3">
                                        Buscamos hacer más emocionante la lectura mediante animaciones, <br />
                                        cómics, página web y redes sociales.
                                    </p>
                                    <div className="text-center mt-5">
                                        <button
                                            className="tipo-grafo btn btn-warning"
                                            onClick={() => setMostrarModal(true)}
                                        >
                                            Mas información
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section id="capitulos">
                <div className="container">
                    <h1 className="tipo-grafia text-center">Capitulos</h1>

                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./capitulo1.jpg" className="mt-5 d-block w-100 rounded-5 border border-5" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="./capitulo.png" className="mt-5 d-block w-100 rounded-5 border border-5" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="./capitulo1.jpg" className="mt-5 d-block w-100 rounded-5 border border-5" alt="" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </section>

            <section id="personajes" className="bg-cafe">
                <div className="container">
                    <h1 className="tipo-grafia text-center mt-5">Personajes</h1>

                    <div id="carouselPersonajes" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-3 g-4">

                                    <div className="col">
                                        <div className="cardi h-90">
                                            <img src="./srrata.jpg" className="card-img-top" alt="" />
                                            <div className="card-body mt-3">
                                                <h5 className="tipo-grafia card-title">Sra Rata</h5>
                                                <p className="tipo-grafo mt-3">Malebola y sombria rata que cumple su rol secundario en la historia</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="cardi h-90">
                                            <img src="./srtopo.jpg" className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="tipo-grafia card-title mt-3">Sr Topo</h5>
                                                <p className="tipo-grafo mt-3">Un topo curioso y amigable que vive en el bosque</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="cardi h-90">
                                            <img src="./srafox.jpg" className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="tipo-grafia card-title mt-3">Sra Fox</h5>
                                                <p className="tipo-grafo mt-3">Una zorra astuta y traviesa y madre de los zorros</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" data-bs-target="#carouselPersonajes" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" data-bs-target="#carouselPersonajes" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </section>

            <section id="sobre-nosotros" className="mt-5">
                <div className="container">
                    <h1 className="tipo-grafia text-center">Sobre nosotros</h1>

                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        <div className="col">
                            <div className="cardi h-100">
                                <img src="./matero.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="tipo-grafia card-title">Matheo Yepez</h5>
                                    <p className="tipo-grafo mt-3">Desarrollador, Diseñador, Animador <br /> Manos del proyecto</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="cardi h-100">
                                <img src="./sneyder.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="tipo-grafia card-title">Sneyder Gaviria</h5>
                                    <p className="tipo-grafo mt-3">Ilustrador, Publicidad, Animador <br /> Cuello del proyecto</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="cardi h-100">
                                <img src="./luis.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="tipo-grafia card-title">Luis Miguel</h5>
                                    <p className="tipo-grafo mt-3">Contenido Digital, Animador, Ilustrador <br /> Cabeza del proyecto</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="footer" className="mb-5 mt-5">
                <div className="container">
                    <div>
                        <h1 className="tipo-grafia text-center mt-5">Footer</h1>
                    </div>

                    <div className="footer-inlec container-fluid rounded-5 border border-5">
                        <div className="container py-5">
                            <div className="row">

                                <div className="col-md-4 footer-col">
                                    <h3 className="tipo-grafia">INLEC</h3>
                                    <p className="tipo-grafo mt-3">
                                        Transformamos la lectura en una experiencia interactiva mediante animaciones,
                                        cómics y contenido digital.
                                    </p>
                                </div>

                                <div className="col-md-4 footer-col">
                                    <h5 className="tipo-grafia">Navegación</h5>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#inicio" style={{ textDecoration: "none", color: "inherit" }}>
                                                Inicio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#capitulos" style={{ textDecoration: "none", color: "inherit" }}>
                                                Capítulos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#personajes" style={{ textDecoration: "none", color: "inherit" }}>
                                                Personajes
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#sobre-nosotros" style={{ textDecoration: "none", color: "inherit" }}>
                                                Sobre Nosotros
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4 footer-col">
                                    <h5 className="tipo-grafia">Síguenos</h5>
                                    <div className="social-icons">
                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-instagram"></i>
                                        <i className="bi bi-youtube"></i>
                                        <i className="bi bi-twitter-x"></i>
                                    </div>
                                    <p className="mt-3">contacto@inlec.com</p>
                                </div>

                            </div>

                            <div className="footer-bottom text-center mt-4">
                                © 2026 INLEC — Todos los derechos reservados
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}