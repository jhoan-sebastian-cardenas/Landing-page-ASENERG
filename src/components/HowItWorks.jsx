import { processSteps } from '../data/steps'
import './HowItWorks.css'

function HowItWorks() {
  return (
    <section id="como-funciona" className="how" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Cómo funciona</p>
          <h2 id="how-title">Así de sencillo es empezar.</h2>
          <p className="section-lead">
            Analizamos tu situación paso a paso para que puedas tomar decisiones con mayor
            claridad.
          </p>
        </div>

        <ol className="how__steps">
          {processSteps.map((step) => (
            <li key={step.id} className="how__card">
              <span className="how__number" aria-hidden="true">
                {step.number}
              </span>
              <div className="how__text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="how__cta">
          <a href="#contacto" className="btn btn--primary">
            Solicitar consulta gratuita
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks