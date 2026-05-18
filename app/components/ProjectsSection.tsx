'use client'
import { useEffect } from 'react'
import type { CSSProperties } from 'react'

export default function ProjectsSection() {
  useEffect(() => {
    // Sticky card offsets
    const cards = document.querySelectorAll<HTMLElement>('.project-card')
    const total = cards.length
    cards.forEach((card, i) => {
      card.style.top = (100 + i * 28) + 'px'
      const scale = 1 - (total - 1 - i) * 0.035
      card.style.transformOrigin = 'top center'
      card.style.transform = `scale(${scale})`
    })

    // Demo frames in-view
    const frames = document.querySelectorAll('.demo-frame')
    const frameIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); frameIO.unobserve(e.target) }
      })
    }, { threshold: 0.25 })
    frames.forEach(el => frameIO.observe(el))

    // Lumen counter
    const countEls = document.querySelectorAll<HTMLElement>('[data-count-to]')
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const target = parseInt(el.dataset.countTo || '0', 10)
        const duration = 1800
        const start = performance.now()
        function tick(now: number) {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = Math.round(eased * target).toLocaleString('es-MX')
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        countIO.unobserve(el)
      })
    }, { threshold: 0.4 })
    countEls.forEach(el => countIO.observe(el))

    // Forma rotator
    const rotator = document.getElementById('forma-rotator')
    if (rotator) {
      const words = rotator.querySelectorAll('.r-word')
      let idx = 0
      const interval = setInterval(() => {
        words[idx].classList.remove('active')
        words[idx].classList.add('exiting')
        const prev = idx
        idx = (idx + 1) % words.length
        words[idx].classList.add('active')
        setTimeout(() => words[prev].classList.remove('exiting'), 600)
      }, 2200)
      return () => { frameIO.disconnect(); countIO.disconnect(); clearInterval(interval) }
    }

    return () => { frameIO.disconnect(); countIO.disconnect() }
  }, [])

  return (
    <section className="projects-section" id="proyectos">
      <div className="demos-intro">
        <div className="eyebrow" data-reveal style={{ color: 'var(--accent)' }}>DEMOS DE ANIMACIÓN</div>
        <h2 className="projects-heading" data-reveal>WEBS QUE<br />SE MUEVEN.</h2>
        <p className="demos-sub" data-reveal>Tres ejemplos en vivo del tipo de animación que construimos: cada una corre dentro de su propio navegador, sin imágenes pesadas, todo en código.</p>
      </div>

      <div className="projects-stack" id="projects-stack">

        {/* Demo 01 — Lumen Metrics */}
        <div className="project-card-container">
          <article className="project-card demo-card" data-index="0">
            <div className="project-top">
              <div className="project-num">01</div>
              <div className="project-meta">
                <div className="project-type">SaaS · Analítica</div>
                <div className="project-name">Lumen Metrics</div>
              </div>
              <div className="project-spacer" />
            </div>
            <div className="demo-frame" data-demo="lumen">
              <div className="browser-bar">
                <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
                <div className="url-bar">lumen.app/dashboard</div>
              </div>
              <div className="demo-body lumen">
                <div className="lumen-left">
                  <div className="lumen-eyebrow">v3.2 — En vivo</div>
                  <h3 className="lumen-title">Decisiones,<br />en tiempo real.</h3>
                  <p className="lumen-sub">Métricas que se actualizan cada segundo. Sin recargar.</p>
                  <div className="lumen-cta">Empieza gratis →</div>
                  <div className="lumen-stat">
                    <div className="lumen-stat-num" data-count-to="24580">0</div>
                    <div className="lumen-stat-label">decisiones tomadas hoy</div>
                  </div>
                </div>
                <div className="lumen-right">
                  <div className="lumen-chart">
                    <div className="lumen-chart-head">
                      <span>Ingresos · Q2</span>
                      <span className="lumen-trend">▲ 24.8%</span>
                    </div>
                    <div className="lumen-bars">
                      {[{h:'38%',d:'0.1s'},{h:'52%',d:'0.18s'},{h:'46%',d:'0.26s'},{h:'67%',d:'0.34s'},{h:'60%',d:'0.42s'},{h:'78%',d:'0.50s'},{h:'72%',d:'0.58s'},{h:'94%',d:'0.66s',accent:true}].map((b, i) => (
                        <div key={i} className={`lumen-bar${b.accent ? ' accent' : ''}`} style={{'--h': b.h, '--d': b.d} as CSSProperties} />
                      ))}
                    </div>
                    <div className="lumen-axis">{'LMXJVSDL'.split('').map(l => <span key={l}>{l}</span>)}</div>
                  </div>
                  <div className="lumen-pill-row">
                    <div className="lumen-pill"><span className="lp-dot" />USD 12,840</div>
                    <div className="lumen-pill"><span className="lp-dot warm" />+128 nuevos</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Demo 02 — Studio Forma */}
        <div className="project-card-container">
          <article className="project-card demo-card" data-index="1">
            <div className="project-top">
              <div className="project-num">02</div>
              <div className="project-meta">
                <div className="project-type">Agencia · Portafolio</div>
                <div className="project-name">Studio Forma</div>
              </div>
              <div className="project-spacer" />
            </div>
            <div className="demo-frame" data-demo="forma">
              <div className="browser-bar">
                <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
                <div className="url-bar">studioforma.mx</div>
              </div>
              <div className="demo-body forma">
                <div className="forma-nav">
                  <span>FORMA</span>
                  <span className="forma-nav-links"><i>Obra</i><i>Estudio</i><i>Contacto</i></span>
                </div>
                <div className="forma-stage">
                  <div className="forma-headline">
                    <span className="forma-static">Diseñamos</span>
                    <span className="forma-rotator" id="forma-rotator">
                      <span className="r-word active">marcas.</span>
                      <span className="r-word">interfaces.</span>
                      <span className="r-word">páginas.</span>
                      <span className="r-word">empresas.</span>
                    </span>
                  </div>
                  <div className="forma-meta">
                    <div className="forma-meta-l">
                      <div className="forma-meta-num">012</div>
                      <div className="forma-meta-lbl">Proyectos<br />activos</div>
                    </div>
                    <div className="forma-meta-r">
                      <div className="forma-meta-lbl small">Estudio independiente<br />fundado en 2021</div>
                    </div>
                  </div>
                </div>
                <div className="forma-marquee">
                  <div className="forma-marquee-track">
                    {['HELADERÍA NORTE','★','NÓMINA','★','CASA TINTO','★','FÁBRICA 09','★','BANCA AURA','★','HELADERÍA NORTE','★','NÓMINA','★','CASA TINTO','★','FÁBRICA 09','★','BANCA AURA','★'].map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Demo 03 — Cápsula Café */}
        <div className="project-card-container">
          <article className="project-card demo-card" data-index="2">
            <div className="project-top">
              <div className="project-num">03</div>
              <div className="project-meta">
                <div className="project-type">eCommerce · Producto</div>
                <div className="project-name">Cápsula Café</div>
              </div>
              <div className="project-spacer" />
            </div>
            <div className="demo-frame" data-demo="capsula">
              <div className="browser-bar">
                <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
                <div className="url-bar">capsulacafe.mx/tienda</div>
              </div>
              <div className="demo-body capsula">
                <div className="cap-left">
                  <div className="cap-tag">SINGLE ORIGIN</div>
                  <h3 className="cap-title">Etiopía<br />Yirgacheffe</h3>
                  <div className="cap-notes">
                    <span>jazmín</span><span>limón</span><span>miel</span>
                  </div>
                  <div className="cap-price-row">
                    <div className="cap-price">$240<small>/250g</small></div>
                    <button className="cap-add">AÑADIR AL CARRITO →</button>
                  </div>
                  <div className="cap-meter">
                    {[{label:'Cuerpo',w:'55%'},{label:'Acidez',w:'82%'},{label:'Dulzor',w:'70%'}].map(({label,w}) => (
                      <div className="cap-meter-row" key={label}>
                        <span>{label}</span>
                        <div className="cap-bar"><i style={{'--w': w} as CSSProperties} /></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cap-right">
                  <div className="cap-stage">
                    <div className="cap-ring r1" /><div className="cap-ring r2" /><div className="cap-ring r3" />
                    <div className="cap-product">
                      <div className="cap-bag">
                        <div className="cap-bag-top" />
                        <div className="cap-bag-body">
                          <div className="cap-bag-strip">CÁPSULA</div>
                          <div className="cap-bag-num">N°02</div>
                          <div className="cap-bag-sub">YIRGACHEFFE</div>
                        </div>
                      </div>
                    </div>
                    <div className="cap-bean b1" /><div className="cap-bean b2" />
                    <div className="cap-bean b3" /><div className="cap-bean b4" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}
