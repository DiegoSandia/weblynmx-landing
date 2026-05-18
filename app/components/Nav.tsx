'use client'
import { useEffect, useRef } from 'react'

const WA = 'https://wa.me/525541426190?text=Hola,%20me%20interesa%20cotizar%20mi%20p%C3%A1gina%20web%20con%20WeblynMX'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const update = () => {
      if (window.scrollY > 60) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <a className="nav-brand" href="#top">
        <span className="nav-logo">W</span>
        <span className="nav-brand-name">WeblynMX</span>
      </a>
      <div className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>
      <a className="pill nav-cta" href={WA} target="_blank" rel="noopener">
        Hablemos →
      </a>
    </nav>
  )
}
