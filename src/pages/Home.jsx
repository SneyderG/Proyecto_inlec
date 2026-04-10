import React from 'react'
import { Header } from '../components/Header'
import "../stylesheets/Home.css"



export const Home = () => {
    return (
        <>
            <div className="bg-top">
                <div className="container mt-5">
                    <div className="row pb-5">
                        <div className="col-0 mt-3 pt-5">
                            <div >
                                <h3 className="text-center">QUE BUSCAMOS</h3>
                                <p className="text-center">En nuestro  proyecto buscamos revolucionar la lectura donde se pueda <br /> convertir en una experiencia  interactivas y por medio de animaciones que haran que cada <br />  usuario pueda encajar y sentirse libre de explorar  inlec,</p>
                            </div>
                            <div>
                                <div className="d-flex ">
                                    <img height="500" src="./foxi.png" alt="Foxy" />
                                    <div className="ms-5 pt-5">
                                        <h3 className=" text-center pt-5">QUE ES INLEC</h3>
                                        <p className=" text-center mt-3 "> Venimos con los objetivos de hacermas emocionante y diversa la transformacion de la lectura <br /> mediante animaciones y comics, tambien diseañar formatos como pagina web,<br /> animaciones e incluso redes sociales</p>
                                        <div className="text-center mt-5">
                                            <button type="button" className="btn btn-warning text-center mt-3">Warning</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="">
                <div className="bg-brown">
                    <div className="container" >
                        <h1 className="text-center">Capitulos</h1>
                        <div className="row">
                            <div className="col-">
                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="./capitulo1.jpg" className="d-block w-100 rounded-3 border border-3 rounded-3" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="..." class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* <div className="dividerl-let"></div> */}
            <div className="bg-let">
                <section className="bg-cafe">
                    <div className="container">
                        <div >
                            <h1 className="text-center">Personajes</h1>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col-4">
                                    <div class="cardi h-90">
                                        <img src="./srrata.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="cardi h-90">
                                        <img src="./srtopo.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="cardi h-90">
                                        <img src="./srafox.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-top">
                <section className="mt-5">
                    <div className="container">
                        <div >
                            <h1 className="text-center">Sobre nosotros</h1>
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col-4">
                                    <div class="cardi h-100">
                                        <img src="./matero.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Matheo Yepez</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="cardi h-100">
                                        <img src="./sneyder.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Sneyder G</h5>
                                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="cardi h-100">
                                        <img src="./luis.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Luis Miguel</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}