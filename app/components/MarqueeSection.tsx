'use client'
import { useEffect, useRef } from 'react'

const row1Urls = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
]
const row2Urls = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

function buildTiles(urls: string[]) {
  return [...urls, ...urls, ...urls]
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const row1 = row1Ref.current
    const row2 = row2Ref.current
    if (!section || !row1 || !row2) return

    let ticking = false
    function update() {
      ticking = false
      const rect = section!.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const x = scrollOffset - 200
      row1!.style.transform = `translateX(${-x}px)`
      row2!.style.transform = `translateX(${x - 600}px)`
    }

    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true }
    }, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="marquee-section" id="showcase" ref={sectionRef}>
      <div className="marquee-label">WEBS QUE HEMOS CONSTRUIDO</div>
      <div className="marquee-rows">
        <div className="marquee-row" ref={row1Ref}>
          {buildTiles(row1Urls).map((url, i) => (
            <div className="marquee-tile" key={i}>
              <img loading="lazy" src={url} alt="" />
            </div>
          ))}
        </div>
        <div className="marquee-row" ref={row2Ref}>
          {buildTiles(row2Urls).map((url, i) => (
            <div className="marquee-tile" key={i}>
              <img loading="lazy" src={url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
