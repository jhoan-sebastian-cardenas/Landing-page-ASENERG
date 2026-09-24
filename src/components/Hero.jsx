import { ArrowRight } from 'lucide-react'
import HeroPanel from './HeroPanel'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">Asesoramiento energético</p>

          <h1 id="hero-title">
            Entiende tu energía. <span className="hero__highlight">Mejora tus decisiones.</span>
          </h1>

          <p className="hero__text">
            Analizamos tu factura y tu consumo para ayudarte a detectar oportunidades de mejora y
            encontrar una solución energética adecuada para ti.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary hero__cta">
              Solicitar consulta gratuita
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <p className="hero__support">
              Un análisis claro de tu situación energética, sin complicaciones.
            </p>
          </div>
        </div>

        <HeroPanel />
      </div>
    </section>
  )
}

export default Hero