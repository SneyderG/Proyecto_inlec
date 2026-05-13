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

                        <h4 className="tipo-grafia" style={{ color: "#E6C682", marginBottom: "0.75rem" }}>
                            Nuestra visión
                        </h4>

                        <p className="tipo-grafo" style={{ color: "#555", marginBottom: "1rem", lineHeight: "1.7" }}>
Nuestra vision es posicionar el podcast de contraplano como un proyecto innovador y referente a la comunicacion digital, reconocido por su capacidad para impactar positivamente la vida de los oyentes.
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
                        Contraplano trata de un podcast donde se hablara y analizaran <br />
                        distintos temas, como peliculas, situaciones de la vida <br />
                        cotidiana y ficcion desde dos puntos de vista.
                    </p>
                </div>

                <div className="row align-items-start justify-content-center mt-4">

                    <div className="col-12 col-md-5 mt-4 text-center">
                        <h3 className="tipo-grafia text-center pt-md-5">
                            DE DONDE SALIO EL NOMBRE
                        </h3>

                        <p className="tipo-grafo text-center mt-3">
                            El nombre nacio gracias a un termino del lenguaje cinematografico
                            <br />
                            que se refiere al encuadre opuesto al plano principal en una
                            conversacion,donde muestra al personaje que habla y luego la
                            reaccion o respuesta del otro personaje.
                        </p>
                    </div>

                    <div className="col-12 col-md-5 mt-4 text-center">
                        <h3 className="tipo-grafia text-center pt-md-5">
                            POR QUE LO ELEGIMOS GF
                        </h3>

                        <p className="tipo-grafo text-center mt-3">
                          Elegimos el nombre contraplano porque en el cine significa mostrar <br /> la perspectiva opuesta que completa una escena. <br /> Esto representa nuestro podcast porque somos dos que analizan y responden cada tema desde distintos puntos de vista, <br /> ofreciendo una vision mas completa y reflexiva en cada capitulo.
                        </p>
                    </div>

                </div>

                <div className="d-flex justify-content-center mt-5">
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
<section id="capitulos">
    <div className="container">
        <h1 className="tipo-grafia text-center">Capitulos</h1>

        <div className="row justify-content-center mt-4">

            <div className="col-12 d-flex justify-content-center">
                <video
                    className="rounded-5 border border-5"
                    controls
                    muted
                    style={{ width: "700px", maxWidth: "100%" }}
                >
                    <source src="./video1.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>

        </div>
    </div>
</section>

            <section id="personajes" className="bg-cafe">
                <div className="container">
                    <h1 className="tipo-grafia text-center mt-5">Temas</h1>

                    <div id="carouselPersonajes" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-3 g-4">

                                    <div className="col">
                                        <div className="cardi h-90">
                                            <img height="300" src="./perso1.jpeg" className="card-img-top" alt="" />
                                            <div className="card-body mt-3">
                                                <h5 className="tipo-grafia card-title">Comedia</h5>
                                                <p className="tipo-grafo mt-3">Tratamos todos los temas con humor para que no sea tan monótono los caapitulos</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="cardi h-90">
                                            <img height="300" src="./perso2.jpeg" className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="tipo-grafia card-title mt-3">Redes sociales</h5>
                                                <p className="tipo-grafo mt-3">hablamos sobre temas cotidianos, la farandula y cosas controversiales</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="cardi h-90">
                                            <img height="300" src="./perso3.jpeg" className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="tipo-grafia card-title mt-3">Peliculas y series</h5>
                                                <p className="tipo-grafo mt-3">hablamos sobre temas que son importantes para nuestro público en las series películas o telenovelas.</p>
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

        <h1 className="tipo-grafia text-center mb-5">
            Sobre nosotros
        </h1>

        {/* SOLO 2 TARJETAS */}
        <div className="row justify-content-center g-5">

            {/* TARJETA 1 */}
            <div className="col-12 col-md-5">
                <div
                    className="cardi h-100 text-center p-3"
                    style={{
                        borderRadius: "25px"
                    }}
                >

                    <img
                        height="500"
                        src="./img1.jpeg"
                        className="card-img-top rounded-4 object-fit-cover"
                        alt=""
                    />

                    <div className="card-body mt-4">

                        <h5 className="tipo-grafia card-title">
                            ANDRES SANCHEZ
                        </h5>

                        <p className="tipo-grafo mt-3">
                            Desarrollador, Diseñador, Animador
                            <br />
                            Manos del proyecto
                        </p>

                    </div>
                </div>
            </div>

            {/* TARJETA 2 */}
            <div className="col-12 col-md-5">
                <div
                    className="cardi h-100 text-center p-3"
                    style={{
                        borderRadius: "25px"
                    }}
                >

                    <img
                        height="500"
                        src="./img2.jpeg"
                        className="card-img-top rounded-4 object-fit-cover"
                        alt=""
                    />

                    <div className="card-body mt-4">

                        <h5 className="tipo-grafia card-title">
                            SNEYDER GAVIRIA
                        </h5>

                        <p className="tipo-grafo mt-3">
                            Ilustrador, Publicidad, Animador
                            <br />
                            Cuello del proyecto
                        </p>

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

        <div
            className="footer-contraplano container-fluid rounded-5 border border-5"
            style={{
                background: "linear-gradient(135deg, #111111, #1f1f1f)",
                color: "white"
            }}
        >

            <div className="container py-5">
                <div className="row gy-4">

                    {/* LOGO Y DESCRIPCIÓN */}
                    <div className="col-md-4 footer-col">
                        <h3 className="tipo-grafia">CONTRAPLANO</h3>

                        <p className="tipo-grafo mt-3">
                            Transformamos la lectura en una experiencia interactiva mediante animaciones,
                            cómics y contenido digital.
                        </p>
                    </div>

                    {/* NAVEGACIÓN */}
                    <div className="col-md-4 footer-col">
                        <h5 className="tipo-grafia mb-3">Navegación</h5>

                        <ul
                            className="footer-links"
                            style={{
                                listStyle: "none",
                                padding: 0
                            }}
                        >

                            <li className="mb-2">
                                <a
                                    href="#inicio"
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                >
                                    Inicio
                                </a>
                            </li>

                            <li className="mb-2">
                                <a
                                    href="#capitulos"
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                >
                                    Capítulos
                                </a>
                            </li>

                            <li className="mb-2">
                                <a
                                    href="#personajes"
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                >
                                    Personajes
                                </a>
                            </li>

                            <li className="mb-2">
                                <a
                                    href="#sobre-nosotros"
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                >
                                    Sobre Nosotros
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* REDES SOCIALES */}
                    <div className="col-md-4 footer-col">

                        <h5 className="tipo-grafia mb-4">Síguenos</h5>

                        {/* ICONOS */}
                        <div
                            className="social-icons d-flex gap-3 fs-3"
                        >

                            <a
                                href="https://www.facebook.com/share/1FwgCoeFAc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white" }}
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white" }}
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white" }}
                            >
                                <i className="bi bi-youtube"></i>
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white" }}
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>

                            <a
                                href="https://www.tiktok.com/@contraplano.podcas?_r=1&_t=ZS-96JNRcpx2wf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "white" }}
                            >
                                <i className="bi bi-tiktok"></i>
                            </a>

                        </div>

                        {/* LINKS */}
                        <div className="mt-4 d-flex flex-column gap-2">

                            <a
                                href="https://www.instagram.com/contraplano.podcast?igsh=MWhwMGVoNnkyOXQ4eA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "#cccccc"
                                }}
                            >
                                Instagram
                            </a>

                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "#cccccc"
                                }}
                            >
                                YouTube
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "#cccccc"
                                }}
                            >
                                X / Twitter
                            </a>

                            <a
                                href="https://www.tiktok.com/@contraplano.podcast"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "#cccccc"
                                }}
                            >
                                TikTok
                            </a>

                        </div>

                    </div>

                </div>

                {/* COPYRIGHT */}
                <div
                    className="footer-bottom text-center mt-5 pt-4"
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.2)"
                    }}
                >
                    © 2026 CONTRAPLANO — Todos los derechos reservados
                </div>

            </div>
        </div>
    </div>
</section>
        </>
    )
}