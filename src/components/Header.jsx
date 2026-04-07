
import "../stylesheets/Header.css"


export const Header = () => {
    return (
        <>
        
           
            <nav className="navbar navbar-expand-lg bg-wave" >
                <div className="container gap-3" >
                    <img height="50" src="./loi.png" alt="" />

                    <a className="navbar-brand" href="/" style={{ color: "#000000", fontFamily: "'carton'", }}>Inicio</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className='nav-link' aria-current="page" href="/misterio"  style={{ color: "#000000", fontFamily: "'carton'", }}>Sobre nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="/Terror" style={{ color: "#000000", fontFamily: "'carton'", }} >Capitulos</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="/Suspenso" style={{ color: "#000000", fontFamily: "'carton'", }} >Mas informacion</a>
                            </li>

                        </ul>
                        <div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                               
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </nav>
            
        </>
    )
}