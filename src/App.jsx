import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Problem />
        <Solution/>
        <Benefits/>
        <HowItWorks/>
        <ContactForm/>
      </main>
      <Footer/>
    </>
  )
}

export default App