'use client'
import { useEffect } from 'react'

export default function ProblemSection() {
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
    <section className="problem-section">
      <div className="problem-inner">
        <div className="eyebrow" data-reveal>EL PROBLEMA</div>
        <h2 className="problem-heading" data-reveal>
          Tu negocio es bueno.<br />
          Tu web <span className="accent">no lo refleja.</span>
        </h2>
        <div className="pain-grid">
          <div className="pain-card" data-reveal style={{ transitionDelay: '0s' }}>
            <div className="pain-icon">
              <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="pain-title">Los clientes no entienden qué haces</h3>
            <p className="pain-desc">Entran a tu web y en 5 segundos no queda claro qué ofreces ni por qué contratarte.</p>
          </div>
          <div className="pain-card" data-reveal style={{ transitionDelay: '0.15s' }}>
            <div className="pain-icon">
              <svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
            </div>
            <h3 className="pain-title">No está adaptada a móvil</h3>
            <p className="pain-desc">El 70% de tus visitas llegan desde celular. Una web que no funciona en móvil es dinero que se va.</p>
          </div>
          <div className="pain-card" data-reveal style={{ transitionDelay: '0.3s' }}>
            <div className="pain-icon">
              <svg viewBox="0 0 24 24"><polyline points="3 6 9 12 13 8 21 16"/><polyline points="21 11 21 16 16 16"/></svg>
            </div>
            <h3 className="pain-title">Visitas pero no ventas</h3>
            <p className="pain-desc">Tener tráfico no sirve sin una estructura de conversión. Tu web no está diseñada para cerrar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
