import React from 'react'
import { Header } from '../components/Header'
import "../stylesheets/Home.css"



export const Home = () => {
    return (
        <>
            <div className="container mt-5 ">
                <div>
                    <div>
                        <h3>
                            Bienvenidos
                        </h3>
                        <p>En nuestro  proyecto buscamos revolucionar la lectura donde se pueda convertir <br /> en una experiencia  interactivas y por medio de animaciones que haran que <br />cada  usuario pueda encajar y sentirse libre de explorar  inlec,</p>
                    </div>
                    <div className="text-center">

                        <img height="300px" src="./foxi.png" />
                    </div>
                </div>
                <div className="row">

                    <div className="col-6">
                        <h2>bum</h2>
                    </div>
                </div>
            </div>

        </>
    )
}