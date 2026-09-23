function App() {
  
  return (
    
    <main className="container" style={{ paddingBlock: 'var(--section-padding-y)' }}>
      <h1>Entiende tu energía. Mejora tus decisiones.</h1>
      <p style={{ margin: '24px 0', color: 'var(--color-text-secondary)' }}>
        Analizamos tu factura y tu consumo para ayudarte a detectar oportunidades de mejora.
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <a className="btn btn--primary" href="#contacto">
          Solicitar consulta gratuita
        </a>
        <a className="btn btn--outline" href="#contacto">
          Solicitar consulta
        </a>
      </div>
    </main>
  
  )
}

export default App
