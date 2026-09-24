import { ArrowRight } from 'lucide-react'
import { solutionSteps } from '../data/steps'
import './Solution.css'

function Solution() {
  return (
    <section id="solucion" className="solution" aria-labelledby="solution-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Nuestra solución</p>
          <h2 id="solution-title">Pon tu energía en perspectiva.</h2>
          <p className="section-lead">
            En ASENERG revisamos tu situación energética para ayudarte a comprender tu factura,
            analizar tu consumo e identificar posibles oportunidades de mejora.
          </p>
        </div>

        <ol className="solution__steps">
          {solutionSteps.map((step, index) => (
            <li key={step.id} className="solution__item">
              <div className="solution__card">
                <span className="solution__number" aria-hidden="true">
                  {String(step.number).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < solutionSteps.length - 1 && (
                <span className="solution__arrow" aria-hidden="true">
                  <ArrowRight size={24} />
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="solution__cta">
          <a href="#contacto" className="btn btn--secondary">
            Solicitar consulta gratuita
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solution