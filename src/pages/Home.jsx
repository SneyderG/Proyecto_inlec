import React from 'react'
import { Header } from '../components/Header'
import "../stylesheets/Home.css"

export const Home = () => {

    return (

        <>

            <Header />

         
            <div id="inicio">

                <div className="container mt-5">

                    <div className="row pb-5">

                        <div className="mt-3 pt-5">

                            <div>

                                <h3 className="text-center">
                                    QUE BUSCAMOS
                                </h3>

                                <p className="text-center">
                                    En nuestro proyecto buscamos revolucionar la lectura donde se pueda <br /> convertir en una experiencia interactivas
                                    por medio <br />de animaciones que harán que cada usuario pueda explorar INLEC.
                                </p>

                            </div>


                            <div className="d-flex">

                                <img height="500" src="./foxi.png" alt="Foxy" />

                                <div className="ms-5 pt-5">

                                    <h3 className="text-center pt-5">
                                        QUE ES INLEC
                                    </h3>

                                    <p className="text-center mt-3">
                                        Buscamos hacer más emocionante la lectura mediante animaciones, <br /> cómics,
                                        página web y redes sociales.
                                    </p>

                                    <div className="text-center mt-5">

                                        <button className="btn btn-warning">
                                            Explorar
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

                    <h1 className="text-center">
                        Capitulos
                    </h1>


                    <div id="carouselExampleCaptions" className="carousel slide">

                        <div className="carousel-inner">


                            <div className="carousel-item active">

                                <img
                                    src="./capitulo1.jpg"
                                    className="mt-5 d-block w-100 rounded-3 border border-3"
                                    alt=""
                                />

                            </div>


                            <div className="carousel-item">

                                <img
                                    src="./capitulo.png"
                                    className="d-block w-100"
                                    alt=""
                                />

                            </div>


                            <div className="carousel-item">

                                <img
                                    src="./capitulo1.jpg"
                                    className="d-block w-100"
                                    alt=""
                                />

                            </div>

                        </div>


                        <button
                            className="carousel-control-prev"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >

                            <span className="carousel-control-prev-icon"></span>

                        </button>


                        <button
                            className="carousel-control-next"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >

                            <span className="carousel-control-next-icon"></span>

                        </button>

                    </div>

                </div>

            </section>


           
            <section id="personajes" className="bg-cafe">

                <div className="container">

                    <h1 className="text-center mt-5">
                        Personajes
                    </h1>


                    <div id="carouselPersonajes" className="carousel slide">

                        <div className="carousel-inner">


                            <div className="carousel-item active">

                                <div className="row row-cols-1 row-cols-md-3 g-4">


                                    <div className="col">

                                        <div className="cardi h-90">

                                            <img src="./srrata.jpg" className="card-img-top" alt="" />

                                            <div className="card-body mt-3">

                                                <h5 className="card-title">
                                                    Sra Rata
                                                </h5>
                                                <p className="mt-3">Malebola y sombria rata que cumple su rol secundario en la historia</p>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col">

                                        <div className="cardi h-90">

                                            <img src="./srtopo.jpg" className="card-img-top" alt="" />

                                            <div className="card-body">

                                                <h5 className="card-title mt-3">
                                                    Sr Topo
                                                </h5>
                                                <p className="mt-3">Un topo curioso y amigable que vive en el bosque</p>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="col">

                                        <div className="cardi h-90">

                                            <img src="./srafox.jpg" className="card-img-top" alt="" />

                                            <div className="card-body">

                                                <h5 className="card-title mt-3">
                                                    Sra Fox
                                                </h5>
                                                <p className="mt-3">Una zorra astuta y traviessa y madre de los zorros</p>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>


                        <button
                            className="carousel-control-prev"
                            data-bs-target="#carouselPersonajes"
                            data-bs-slide="prev"
                        >

                            <span className="carousel-control-prev-icon"></span>

                        </button>


                        <button
                            className="carousel-control-next"
                            data-bs-target="#carouselPersonajes"
                            data-bs-slide="next"
                        >

                            <span className="carousel-control-next-icon"></span>

                        </button>

                    </div>

                </div>

            </section>


            
            <section id="sobre-nosotros" className="mt-5">

                <div className="container">

                    <h1 className="text-center">
                        Sobre nosotros
                    </h1>

                    <div className="row row-cols-1 row-cols-md-3 g-4">


                        <div className="col">

                            <div className="cardi h-100">

                                <img src="./matero.png" className="card-img-top" alt="" />

                                <div className="card-body">

                                    <h5 className="card-title">
                                        Matheo Yepez
                                    </h5>
                                    <p className="mt-3">Desarrollador, Diseñador, Animador <br /> Manos del proyecto</p>

                                </div>

                            </div>

                        </div>


                        <div className="col">

                            <div className="cardi h-100">

                                <img src="./sneyder.png" className="card-img-top" alt="" />

                                <div className="card-body">

                                    <h5 className="card-title">
                                        Sneyder Gaviria
                                    </h5>
                                    <p className="mt-3">Ilustrador,Publicidad, Animador <br />Cuello del proyecto</p>
                                    

                                </div>

                            </div>

                        </div>


                        <div className="col">

                            <div className="cardi h-100">

                                <img src="./luis.png" className="card-img-top" alt="" />

                                <div className="card-body">

                                    <h5 className="card-title">
                                        Luis Miguel
                                    </h5>
                                    <p className="mt-3">Contenido Digital,Animador,Ilustrador <br />Cabeza del proyecto</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            
            <section id="footer" className="mb-5 mt-5">

                <div className="container">
                    <div>
                        <h1 className='text-center mt-5'>Footer</h1>
                    </div>

                    <div className="footer-inlec container-fluid rounded-5 border border-5">

                        <div className="container py-5">

                            <div className="row">


                                <div className="col-md-4 footer-col">

                                    <h3>INLEC</h3>

                                    <p>
                                        Transformamos la lectura en una experiencia interactiva mediante animaciones,
                                        cómics y contenido digital.
                                    </p>

                                </div>


                                <div className="col-md-4 footer-col">

                                    <h5>Navegación</h5>

                                    <ul className="footer-links">

                                        <li>
                                            <a href="#inicio">Inicio</a>
                                        </li>

                                        <li>
                                            <a href="#capitulos">Capítulos</a>
                                        </li>

                                        <li>
                                            <a href="#personajes">Personajes</a>
                                        </li>

                                        <li>
                                            <a href="#sobre-nosotros">Sobre Nosotros</a>
                                        </li>

                                    </ul>

                                </div>


                                <div className="col-md-4 footer-col">

                                    <h5>Síguenos</h5>

                                    <div className="social-icons">

                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-instagram"></i>
                                        <i className="bi bi-youtube"></i>
                                        <i className="bi bi-twitter-x"></i>

                                    </div>

                                    <p className="mt-3">
                                        contacto@inlec.com
                                    </p>

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