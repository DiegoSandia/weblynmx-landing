import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeSection from './components/MarqueeSection'
import ProblemSection from './components/ProblemSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MarqueeSection />
      <ProblemSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
