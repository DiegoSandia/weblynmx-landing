export default function Footer() {
  return (
    <footer className="footer" id="contacto-footer">
      <div className="footer-blob" />
      <div className="footer-top">
        <div className="footer-lede" data-reveal>
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>CONTÁCTANOS</div>
          <h3 className="footer-heading">
            Empecemos a<br />construir<span className="accent"> juntos.</span>
          </h3>
          <p className="footer-lede-sub">
            Cuatro maneras de llegar a nosotros. Elige la que prefieras — respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-btn primary"
            href="https://wa.me/525541426190?text=Hola,%20me%20interesa%20cotizar%20mi%20p%C3%A1gina%20web%20con%20WeblynMX"
            target="_blank" rel="noopener"
            data-reveal style={{ transitionDelay: '0s' }}
          >
            <div className="cb-icon">
              <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.673.244-1.032 0-.27 0-.53-.144-.745-.143-.245-.473-.345-.673-.473zM16.282 26.13c-1.474 0-2.92-.4-4.181-1.158l-2.79.747.74-2.832c-.846-1.318-1.318-2.847-1.318-4.426 0-4.18 3.49-7.67 7.67-7.67 4.182 0 7.671 3.49 7.671 7.671 0 4.181-3.489 7.67-7.67 7.67zm0-16.789c-5.063 0-9.118 4.055-9.118 9.118 0 1.732.473 3.41 1.347 4.886L6.5 28.205l5.063-1.317c1.43.79 3.05 1.218 4.715 1.218 5.063 0 9.118-4.055 9.118-9.118.001-5.063-4.054-9.118-9.117-9.118z"/></svg>
            </div>
            <div className="cb-text">
              <div className="cb-label">WhatsApp — más rápido</div>
              <div className="cb-value">+52 1 55 4142 6190</div>
            </div>
            <div className="cb-arrow">→</div>
          </a>

          <a className="contact-btn" href="mailto:WebLynMx@gmail.com" data-reveal style={{ transitionDelay: '0.1s' }}>
            <div className="cb-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
              </svg>
            </div>
            <div className="cb-text">
              <div className="cb-label">Correo</div>
              <div className="cb-value">WebLynMx@gmail.com</div>
            </div>
            <div className="cb-arrow">→</div>
          </a>

          <a className="contact-btn" href="https://tarjeta-weblynmx.vercel.app/" target="_blank" rel="noopener" data-reveal style={{ transitionDelay: '0.2s' }}>
            <div className="cb-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2.5"/><circle cx="9" cy="12" r="2.2"/>
                <line x1="14" y1="10" x2="19" y2="10"/><line x1="14" y1="14" x2="17.5" y2="14"/>
              </svg>
            </div>
            <div className="cb-text">
              <div className="cb-label">Tarjeta digital</div>
              <div className="cb-value">tarjeta-weblynmx.vercel.app</div>
            </div>
            <div className="cb-arrow">→</div>
          </a>

          <a className="contact-btn" href="https://instagram.com/Weblynmx" target="_blank" rel="noopener" data-reveal style={{ transitionDelay: '0.3s' }}>
            <div className="cb-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="cb-text">
              <div className="cb-label">Instagram</div>
              <div className="cb-value">@Weblynmx</div>
            </div>
            <div className="cb-arrow">→</div>
          </a>
        </div>
      </div>

      <div className="footer-strip">
        <div className="footer-strip-track">
          {['WEBLYNMX','★','WEBS QUE CONVIERTEN','★','WEBLYNMX','★','NEGOCIOS QUE CRECEN','★','WEBLYNMX','★','WEBS QUE CONVIERTEN','★','WEBLYNMX','★','NEGOCIOS QUE CRECEN','★'].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className="footer-inner">
        <div>
          <div className="footer-brand">WeblynMX</div>
          <div className="footer-tag">Websites that grow businesses.</div>
        </div>
        <div className="footer-center">Ciudad de México · Operamos en toda LATAM</div>
      </div>
      <div className="footer-bottom">© 2026 WeblynMX · Más que diseño. Conversión.</div>
    </footer>
  )
}
