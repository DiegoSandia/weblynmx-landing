'use client'
import { useEffect } from 'react'

const testimonials = [
  { quote: 'Cambiamos la web hace cuatro meses y las cotizaciones que entran por el formulario se triplicaron. La diferencia no fue suerte: fue estructura.', name: 'Mariana Cárdenas', role: 'Directora · Distribuidora Norte', delay: '0s' },
  { quote: 'Entendieron mi negocio antes de hablar de diseño. Cuando me mostraron el prototipo, ya parecía que llevaban años trabajando conmigo.', name: 'Daniela Ruiz', role: 'Fundadora · Studio Bloom', delay: '0.15s' },
  { quote: 'Por fin tengo una web que carga rápido, que mis clientes encuentran fácil y que se siente seria. Vale cada peso.', name: 'Jorge Alemán', role: 'Dueño · Ferretería Constructiva', delay: '0.3s' },
]

export default function TestimonialsSection() {
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
    <section className="testimonials-section" id="nosotros">
      <div className="eyebrow" data-reveal style={{ textAlign: 'center' }}>LO QUE DICEN</div>
      <div className="testimonials-grid">
        {testimonials.map(({ quote, name, role, delay }) => (
          <article className="testimonial-card" data-reveal key={name} style={{ transitionDelay: delay }}>
            <div className="quote-mark">&ldquo;</div>
            <p className="testimonial-quote">{quote}</p>
            <div className="testimonial-name">{name}</div>
            <div className="testimonial-role">{role}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
