'use client'
import { useEffect, useRef } from 'react'

const WA = 'https://wa.me/525541426190?text=Hola,%20me%20interesa%20cotizar%20mi%20p%C3%A1gina%20web%20con%20WeblynMX'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Word stagger animation
    const headline = headlineRef.current
    if (headline) {
      const h = headline
      const nodes = Array.from(h.childNodes)
      h.innerHTML = ''
      let i = 0
      const baseDelay = 0.5
      const step = 0.06

      function pushWord(text: string) {
        text.split(/(\s+)/).forEach(part => {
          if (!part) return
          if (/^\s+$/.test(part)) {
            h.appendChild(document.createTextNode(part))
          } else {
            const span = document.createElement('span')
            span.className = 'word'
            span.textContent = part
            span.style.animationDelay = (baseDelay + i * step) + 's'
            h.appendChild(span)
            i++
          }
        })
      }

      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          pushWord(node.textContent || '')
        } else if ((node as Element).nodeName === 'BR') {
          h.appendChild(document.createElement('br'))
        } else if ((node as Element).classList?.contains('accent')) {
          const span = document.createElement('span')
          span.className = 'word accent'
          span.textContent = (node as Element).textContent
          span.style.animationDelay = (baseDelay + i * step) + 's'
          h.appendChild(span)
          i++
        } else {
          h.appendChild(node)
        }
      })
    }

    // Ping-pong video
    const video = videoRef.current
    if (!video) return
    let forward = true
    let rafId = 0

    function rewind() {
      if (forward) return
      const t = video!.currentTime - 1 / 30
      if (t <= 0) {
        video!.currentTime = 0
        forward = true
        video!.play().catch(() => {})
        return
      }
      video!.currentTime = t
      rafId = requestAnimationFrame(rewind)
    }

    function onEnded() {
      if (forward) {
        forward = false
        video!.pause()
        cancelAnimationFrame(rafId)
        rewind()
      }
    }

    video.addEventListener('ended', onEnded)
    video.loop = false
    const tryPlay = () => video.play().catch(() => {})
    if (video.readyState >= 2) tryPlay()
    else video.addEventListener('loadeddata', tryPlay, { once: true })

    return () => {
      video.removeEventListener('ended', onEnded)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero-video"
        id="hero-video"
        src="/assets/hero.mp4"
        poster="/assets/hero-start.png"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">AGENCIA WEB / MÉXICO</div>
        <h1 className="hero-headline" id="hero-headline" ref={headlineRef}>
          Webs que <span className="accent">convierten</span>.<br />
          Negocios que crecen.
        </h1>
        <p className="hero-subtext">
          Diseñamos páginas web estratégicas que generan confianza, autoridad y ventas reales para tu negocio.
        </p>
        <div className="hero-ctas">
          <a className="pill cta-ghost" href="#proyectos">Ver proyectos</a>
          <a className="pill cta-primary" href={WA} target="_blank" rel="noopener">
            Hablemos de tu proyecto →
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-text">SCROLL</div>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
