'use client'
import { useEffect } from 'react'

const services = [
  { num: 1, title: 'Diseño estratégico', desc: 'Estructuramos tu sitio para que cada sección tenga un propósito claro: informar, generar confianza, y convertir.' },
  { num: 2, title: 'Desarrollo a medida', desc: 'Sin templates. Sin límites de plataforma. Tu web, construida desde cero con código limpio y escalable.' },
  { num: 3, title: 'Rendimiento extremo', desc: 'Velocidad de carga optimizada, Core Web Vitals en verde, SEO técnico base incluido desde el día uno.' },
  { num: 4, title: 'Soporte continuo', desc: 'No desaparecemos al entregar. Cambios, actualizaciones, consultas. Somos tu equipo web a largo plazo.' },
]

export default function ServicesSection() {
  useEffect(() => {
    // Reveal
    const els = document.querySelectorAll('[data-reveal]')
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    els.forEach(el => revealIO.observe(el))

    // Counter animation
    const items = document.querySelectorAll<HTMLElement>('[data-counter]')
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const target = parseInt(el.dataset.counter || '0', 10)
        const duration = 1200
        const start = performance.now()
        function tick(now: number) {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = Math.round(eased * target).toString().padStart(2, '0')
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        counterIO.unobserve(el)
      })
    }, { threshold: 0.4 })
    items.forEach(el => counterIO.observe(el))

    return () => { revealIO.disconnect(); counterIO.disconnect() }
  }, [])

  return (
    <section className="services-section" id="servicios">
      <h2 className="services-heading" data-reveal>SERVICIOS</h2>
      <div className="services-list">
        {services.map(({ num, title, desc }, i) => (
          <div className="service-item" data-reveal key={num} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="service-number" data-counter={num}>
              {num.toString().padStart(2, '0')}
            </div>
            <div className="service-body">
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
