import Header from './components/Header'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <Header />
      <main>
        <section
          id="inicio"
          className="container"
          style={{ minHeight: '100vh', paddingTop: '120px' }}
        >
          <h1>Hero (pendiente)</h1>
        </section>
        <Problem />
        <Solution/>
        <Benefits/>
        <HowItWorks/>
        <ContactForm/>
      </main>
    </>
  )
}

export default App