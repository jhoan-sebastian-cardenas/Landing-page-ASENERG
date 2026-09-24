import Header from './components/Header'

const testSection = { minHeight: '100vh', paddingTop: '120px' }

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="container" style={testSection}>
          <h1>Entiende tu energía. Mejora tus decisiones.</h1>
        </section>
        <section id="como-funciona" className="container" style={testSection}>
          <h2>Cómo funciona</h2>
        </section>
        <section id="contacto" className="container" style={testSection}>
          <h2>Contacto</h2>
        </section>
      </main>
    </>
  )
}

export default App