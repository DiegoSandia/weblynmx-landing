'use client'
import { useEffect } from 'react'

const WA = 'https://wa.me/5215541426190?text=Hola,%20me%20interesa%20cotizar%20mi%20p%C3%A1gina%20web%20con%20WeblynMX'

export default function PricingSection() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="pricing-section" id="contacto">
      <h2 className="pricing-heading" data-reveal>
        TU NEGOCIO MERECE<br />
        <span className="accent">VERSE GRANDE.</span>
      </h2>
      <p className="pricing-sub" data-reveal style={{ transitionDelay: '0.1s' }}>
        Comenzamos con una conversación, no con una lista de precios.
      </p>
      <a
        className="pill pricing-cta"
        href={WA}
        target="_blank"
        rel="noopener"
        data-reveal
        style={{ transitionDelay: '0.2s' } as React.CSSProperties}
      >
        COTIZAR MI PROYECTO
      </a>
      <p className="pricing-after" data-reveal style={{ transitionDelay: '0.3s' }}>
        Respuesta en menos de 24 horas. Sin compromiso.
      </p>
    </section>
  )
}
