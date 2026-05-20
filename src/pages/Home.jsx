import React, { useState, useEffect, useRef } from 'react'
import { Header } from '../components/Header'
import "../stylesheets/Home.css"

export const Home = () => {

    const [mostrarModal, setMostrarModal] = useState(false)
    const cursorRef = useRef(null)
    const cursorRingRef = useRef(null)

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + 'px'
                cursorRef.current.style.top = e.clientY + 'px'
            }
            setTimeout(() => {
                if (cursorRingRef.current) {
                    cursorRingRef.current.style.left = e.clientX + 'px'
                    cursorRingRef.current.style.top = e.clientY + 'px'
                }
            }, 80)
        }
        document.addEventListener('mousemove', moveCursor)
        return () => document.removeEventListener('mousemove', moveCursor)
    }, [])

   
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal')
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible')
            }),
            { threshold: 0.15 }
        )
        reveals.forEach(r => observer.observe(r))
        return () => observer.disconnect()
    }, [])

   
    const onHoverEnter = () => {
        if (cursorRef.current) {
            cursorRef.current.style.width = '20px'
            cursorRef.current.style.height = '20px'
        }
        if (cursorRingRef.current) {
            cursorRingRef.current.style.opacity = '1'
            cursorRingRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'
        }
    }
    const onHoverLeave = () => {
        if (cursorRef.current) {
            cursorRef.current.style.width = '12px'
            cursorRef.current.style.height = '12px'
        }
        if (cursorRingRef.current) {
            cursorRingRef.current.style.opacity = '0.6'
            cursorRingRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
        }
    }

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const filmStrips = Array.from({ length: 20 })

    return (
        <>
            
            <div className="cp-cursor" ref={cursorRef}></div>
            <div className="cp-cursor-ring" ref={cursorRingRef}></div>

         
            <nav className="cp-nav">
                <a href="#inicio" className="cp-logo-nav">
                    CONTRA<span className="cp-logo-dim">PLANO</span>
                </a>
                <ul className="cp-nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#capitulos">Capítulos</a></li>
                    <li><a href="#temas">Temas</a></li>
                    <li><a href="#sobre-nosotros">Nosotros</a></li>
                </ul>
            </nav>

           
            {mostrarModal && (
                <div
                    className="cp-modal-overlay"
                    onClick={() => setMostrarModal(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Nuestra visión"
                >
                    <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
                        <div className="cp-modal-box">
                            <div className="cp-modal-corner-tl"></div>
                            <div className="cp-modal-corner-br"></div>
                            <button
                                className="cp-modal-close"
                                onClick={() => setMostrarModal(false)}
                                aria-label="Cerrar"
                                onMouseEnter={onHoverEnter}
                                onMouseLeave={onHoverLeave}
                            >✕</button>
                            <div className="cp-modal-icon">🎬</div>
                            <div className="cp-modal-title">Nuestra visión</div>
                            <p className="cp-modal-text">
                                Nuestra visión es posicionar el podcast de Contraplano como un proyecto
                                innovador y referente en la comunicación digital, reconocido por su
                                capacidad para impactar positivamente la vida de los oyentes —
                                capítulo a capítulo, perspectiva a perspectiva.
                            </p>
                            <button
                                className="cp-btn-modal-close"
                                onClick={() => setMostrarModal(false)}
                                onMouseEnter={onHoverEnter}
                                onMouseLeave={onHoverLeave}
                            >
                                ¡Entendido!
                            </button>
                        </div>
                    </div>
                </div>
            )}

            
            <section id="inicio" className="cp-hero">
                <div className="cp-hero-bg"></div>

                
                <div className="cp-film-strips" aria-hidden="true">
                    {filmStrips.map((_, i) => <div key={i} className="cp-film-strip-item"></div>)}
                </div>
             
                <div className="cp-film-strips cp-film-strips-right" aria-hidden="true">
                    {filmStrips.map((_, i) => <div key={i} className="cp-film-strip-item"></div>)}
                </div>

                <div className="cp-scan-line" aria-hidden="true"></div>
                <div className="cp-noise" aria-hidden="true"></div>

                <div className="cp-hero-content">
                    <div className="cp-hero-tag">🎙 Podcast · Dos perspectivas · Una conversación</div>
                    <h1 className="cp-hero-h1">
                        <span className="cp-contra">CONTRA</span>
                        <span className="cp-plano">PLANO</span>
                    </h1>
                    <p className="cp-hero-sub">
                        Un podcast donde dos voces analizan el cine, la vida cotidiana y la
                        cultura pop — desde ángulos opuestos.
                    </p>
                    <div className="cp-hero-ctas">
                        <button
                            className="cp-btn-oro"
                            onClick={() => scrollTo('capitulos')}
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            Ver capítulos
                        </button>
                        <button
                            className="cp-btn-ghost"
                            onClick={() => scrollTo('sobre-nosotros')}
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            Quiénes somos
                        </button>
                    </div>
                </div>

                <div className="cp-hero-scroll" aria-hidden="true">
                    <span className="cp-scroll-text"></span>
                    <div className="cp-scroll-line"></div>
                </div>
                <div className="cp-counter-strip"></div>
            </section>

           
            <section id="inicio" className="cp-section cp-section-dark">
                <div className="cp-section-num" aria-hidden="true">01</div>
                <p className="cp-section-label reveal">— Sobre el proyecto</p>
                <h2 className="cp-section-title reveal reveal-delay-1">
                    QUÉ <span className="cp-oro">BUSCAMOS</span>
                </h2>

                <div className="cp-buscamos-grid reveal reveal-delay-2">

                    <div
                        className="cp-buscamos-card"
                        onMouseEnter={onHoverEnter}
                        onMouseLeave={onHoverLeave}
                    >
                        <div className="cp-card-num">01</div>
                        <div className="cp-card-title">El concepto</div>
                        <p className="cp-card-text">
                            Contraplano es un podcast donde se hablan y analizan distintos temas —
                            desde películas y series hasta situaciones de la vida cotidiana —
                            siempre desde dos puntos de vista opuestos y complementarios.
                        </p>
                        <div className="cp-card-accent"></div>
                    </div>

                    <div
                        className="cp-buscamos-card"
                        onMouseEnter={onHoverEnter}
                        onMouseLeave={onHoverLeave}
                    >
                        <div className="cp-card-num">02</div>
                        <div className="cp-card-title">El nombre</div>
                        <p className="cp-card-text">
                            El término viene del lenguaje cinematográfico: el encuadre opuesto al
                            plano principal en una conversación. Primero ves al que habla, luego
                            la reacción del otro. Así somos nosotros.
                        </p>
                        <div className="cp-card-accent"></div>
                    </div>

                    <div
                        className="cp-buscamos-card"
                        onMouseEnter={onHoverEnter}
                        onMouseLeave={onHoverLeave}
                    >
                        <div className="cp-card-num">03</div>
                        <div className="cp-card-title">Por qué lo elegimos</div>
                        <p className="cp-card-text">
                            Porque en el cine el contraplano completa la escena. Nosotros somos
                            dos voces que completan el análisis — perspectivas distintas que
                            juntas ofrecen una visión más rica y reflexiva de cada tema.
                        </p>
                        <div className="cp-card-accent"></div>
                    </div>

                    <div
                        className="cp-buscamos-card cp-card-vision"
                        onMouseEnter={onHoverEnter}
                        onMouseLeave={onHoverLeave}
                    >
                        <div>
                            <div className="cp-card-num">✦</div>
                            <div className="cp-card-title">Nuestra visión</div>
                            <p className="cp-card-text">
                                Posicionarnos como un proyecto innovador y referente en la
                                comunicación digital, reconocido por el impacto positivo que
                                generamos en la vida de nuestros oyentes.
                            </p>
                        </div>
                        <button
                            className="cp-btn-vision"
                            onClick={() => setMostrarModal(true)}
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            <span>
                                Leer más
                                <svg className="cp-arrow" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                        <div className="cp-card-accent"></div>
                    </div>

                </div>
            </section>

           
            <section id="capitulos" className="cp-section cp-section-grey">
                <div className="cp-cap-bg-text" aria-hidden="true">CAP</div>
                <div className="cp-cap-wrapper">
                    <p className="cp-section-label reveal">— En pantalla</p>
                    <h2 className="cp-section-title reveal reveal-delay-1">CAPÍTULOS</h2>
                    <div className="cp-cap-badge reveal reveal-delay-2">
                        <span className="cp-live-dot"></span>
                        Temporada 1 — En curso
                    </div>
                    <div className="cp-video-frame reveal reveal-delay-3">
                        <div className="cp-video-border"></div>
                        <div className="cp-video-border-tl" aria-hidden="true"></div>
                        <div className="cp-video-border-br" aria-hidden="true"></div>
                        <video className="cp-video" controls muted>
                            <source src="./video1.mp4" type="video/mp4" />
                            <p>Tu navegador no soporta videos.</p>
                        </video>
                    </div>
                </div>
            </section>

            
            <section id="temas" className="cp-section cp-section-dark">
                <p className="cp-section-label reveal">— De qué hablamos</p>
                <h2 className="cp-section-title reveal reveal-delay-1">TEMAS</h2>
                <div className="cp-temas-grid reveal reveal-delay-2">

                    {[
                        {
                            src: './perso1.jpeg', num: '001', tag: 'Entretenimiento',
                            title: 'Comedia',
                            text: 'Tratamos todos los temas con humor para que cada capítulo sea una experiencia fresca y entretenida, sin perder la profundidad del análisis.'
                        },
                        {
                            src: './perso2.jpeg', num: '002', tag: 'Actualidad',
                            title: 'Redes sociales',
                            text: 'Hablamos sobre temas cotidianos, la farándula y todo lo que está dando de qué hablar en internet — sin filtros, con criterio.'
                        },
                        {
                            src: './perso3.jpeg', num: '003', tag: 'Cine & TV',
                            title: 'Películas y series',
                            text: 'Análisis, opiniones y debate sobre lo más relevante del cine, las series y las telenovelas — con dos perspectivas que no siempre coinciden.'
                        },
                    ].map((tema) => (
                        <div
                            key={tema.num}
                            className="cp-tema-card"
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            <div className="cp-tema-img-wrap">
                                <img src={tema.src} alt={tema.title} className="cp-tema-img" />
                            </div>
                            <div className="cp-tema-info">
                                <div className="cp-tema-num">{tema.num}</div>
                                <div className="cp-tema-tag">{tema.tag}</div>
                                <div className="cp-tema-title">{tema.title}</div>
                                <p className="cp-tema-text">{tema.text}</p>
                            </div>
                            <div className="cp-tema-hover-line"></div>
                        </div>
                    ))}

                </div>
            </section>

           
            <section id="sobre-nosotros" className="cp-section cp-section-grey">
                <p className="cp-section-label reveal">— Detrás del micrófono</p>
                <h2 className="cp-section-title reveal reveal-delay-1">NOSOTROS</h2>
                <div className="cp-nosotros-grid reveal reveal-delay-2">

                    {[
                        {
                            img: './img1.jpeg', name: 'ANDRÉS\nSÁNCHEZ', role: 'LIDER',
                            bio: 'Desarrollador, diseñador y animador. El que da vida visual al proyecto — desde la identidad hasta cada píxel de la experiencia digital.',
                            tags: ['Dev', 'Diseño', 'Animación'], num: '01'
                        },
                        {
                            img: './img2.jpeg', name: 'SARA\nCASTRILLON', role: 'INTEGRANTE',
                            bio: 'Ilustrador, publicista y animador. La voz creativa que conecta el contenido con la audiencia — estrategia, imagen y presencia.',
                            tags: ['Ilustración', 'Publicidad', 'Animación'], num: '02'
                        },
                    ].map((p) => (
                        <div
                            key={p.num}
                            className="cp-persona-card"
                            onMouseEnter={onHoverEnter}
                            onMouseLeave={onHoverLeave}
                        >
                            <div className="cp-persona-avatar">
                                <img src={p.img} alt={p.name.replace('\n', ' ')} className="cp-avatar-img" />
                            </div>
                            <div>
                                <div className="cp-persona-name">
                                    {p.name.split('\n').map((line, i) => (
                                        <span key={i}>{line}{i === 0 && <br />}</span>
                                    ))}
                                </div>
                                <div className="cp-persona-role">{p.role}</div>
                                <p className="cp-persona-bio">{p.bio}</p>
                                <div className="cp-persona-tags">
                                    {p.tags.map(t => <span key={t} className="cp-p-tag">{t}</span>)}
                                </div>
                            </div>
                            <div className="cp-persona-num">{p.num}</div>
                        </div>
                    ))}

                </div>
            </section>

            
            <footer className="cp-footer">
                <div className="cp-footer-inner">
                    <div>
                        <div className="cp-footer-brand">CONTRA<br />PLANO</div>
                        <p className="cp-footer-tagline">
                            Dos perspectivas. Una sola conversación. Transformamos el análisis en
                            una experiencia auténtica, episodio a episodio.
                        </p>
                    </div>
                    <div>
                        <div className="cp-footer-h">Navegación</div>
                        <ul className="cp-footer-links">
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#capitulos">Capítulos</a></li>
                            <li><a href="#temas">Temas</a></li>
                            <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="cp-footer-h">Síguenos</div>
                        <div className="cp-social-row">
                            {[
                                { href: 'https://www.facebook.com/share/1FwgCoeFAc/', label: 'Facebook', text: 'fb' },
                                { href: 'https://www.instagram.com/contraplano.podcast?igsh=MWhwMGVoNnkyOXQ4eA==', label: 'Instagram', text: 'ig' },
                                { href: 'https://www.youtube.com/', label: 'YouTube', text: 'yt' },
                                { href: 'https://www.tiktok.com/@contraplano.podcas', label: 'TikTok', text: 'tk' },
                                { href: 'https://x.com/', label: 'X / Twitter', text: 'x' },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cp-social-btn"
                                    aria-label={s.label}
                                    onMouseEnter={onHoverEnter}
                                    onMouseLeave={onHoverLeave}
                                >
                                    {s.text}
                                </a>
                            ))}
                        </div>
                        <ul className="cp-footer-links">
                            <li><a href="https://www.instagram.com/contraplano.podcast?igsh=MWhwMGVoNnkyOXQ4eA==" target="_blank" rel="noopener noreferrer">Instagram →</a></li>
                            <li><a href="https://www.tiktok.com/@contraplano.podcas" target="_blank" rel="noopener noreferrer">TikTok →</a></li>
                            <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube →</a></li>
                        </ul>
                    </div>
                </div>
                <div className="cp-footer-bottom">
                    <span className="cp-footer-copy">© 2026 CONTRAPLANO — Todos los derechos reservados</span>
                    <span className="cp-footer-tagmark">MEDELLÍN · CO</span>
                </div>
            </footer>
        </>
    )
}