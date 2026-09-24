import { benefits } from '../data/benefits'
import './Benefits.css'

function Benefits() {
  return (
    <section id="beneficios" className="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">¿Por qué ASENERG?</p>
          <h2 id="benefits-title">Más claridad para tomar mejores decisiones.</h2>
          <p className="section-lead">
            Te ayudamos a entender tu situación energética de una forma sencilla y personalizada.
          </p>
        </div>

        <ul className="benefits__grid">
          {benefits.map(({ id, icon: Icon, title, description }) => (
            <li key={id} className="benefits__card">
              <span className="benefits__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={2} />
              </span>
              <div className="benefits__text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Benefits