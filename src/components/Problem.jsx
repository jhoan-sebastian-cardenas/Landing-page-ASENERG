import './Problem.css'

function Problem() {
  return (
    <section id="problema" className="problem" aria-labelledby="problem-title">
      <div className="container problem__inner">
        <div className="problem__heading">
          <p className="eyebrow">Tu factura energética</p>
          <h2 id="problem-title">¿Realmente entiendes lo que estás pagando?</h2>
        </div>

        <div className="problem__content">
          <p>
            Una factura energética puede contener mucha información y no siempre es fácil saber qué
            significa cada dato o cómo se relaciona con tu consumo.
          </p>
          <p>
            Entender tu situación es el primer paso para identificar posibles oportunidades de
            mejora.
          </p>
          <p className="problem__highlight">Más información no siempre significa más claridad.</p>
        </div>
      </div>
    </section>
  )
}

export default Problem