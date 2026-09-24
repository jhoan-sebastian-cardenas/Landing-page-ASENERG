import './HeroPanel.css'

const CHART_WIDTH = 600
const CHART_HEIGHT = 200

// Datos ficticios de 12 meses. Cada valor es la altura desde la parte superior del gráfico.
const FACT_ACTUAL = [79, 59, 88, 39, 68, 20, 53, 25, 79, 49, 88, 59]
const PROP = [98, 89, 104, 94, 109, 84, 99, 94, 104, 109, 114, 119]
const GRID_LINES = [0, 50, 100, 150, 200]

function toPoints(values) {
  const step = CHART_WIDTH / (values.length - 1)
  return values.map((y, index) => `${(index * step).toFixed(1)},${y}`).join(' ')
}

function HeroPanel() {
  return (
    <figure className="hero-panel" aria-labelledby="hero-panel-title">
      <div className="hero-panel__header">
        <div>
          <p className="hero-panel__label">Análisis de Consumo Estimado - Ejemplo</p>
          <p id="hero-panel-title" className="hero-panel__title">
            Optimización de Potencia y Tarifas
          </p>
        </div>
        <span className="hero-panel__badge">Luz y Agua</span>
      </div>

      <dl className="hero-panel__stats">
        <div className="hero-panel__stat">
          <dt>Potencia contratada</dt>
          <dd>9,2 kW - 5.3 KW</dd>
        </div>
        <div className="hero-panel__stat">
          <dt>Recargos Detectatos</dt>
          <dd>320 kWh</dd>
        </div>
      </dl>

      <svg
        className="hero-panel__chart"
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Grafico de Optimización de Potencia y Tarifas"
      >
        {GRID_LINES.map((y) => (
          <line
            key={y}
            className="hero-panel__grid"
            x1="0"
            x2={CHART_WIDTH}
            y1={y}
            y2={y}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <polyline
          className="hero-panel__line hero-panel__line--day"
          points={toPoints(FACT_ACTUAL)}
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          className="hero-panel__line hero-panel__line--night"
          points={toPoints(PROP)}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <ul className="hero-panel__legend">
        <li>
          <span className="hero-panel__swatch hero-panel__swatch--day" aria-hidden="true" />
          Facturación Actual
        </li>
        <li>
          <span className="hero-panel__swatch hero-panel__swatch--night" aria-hidden="true" />
          Propuesta Asenerg
        </li>
      </ul>
    </figure>
  )
}

export default HeroPanel