import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import './Header.css'

const NAV_LINKS = [
  { id: 'solucion', label: 'Solución' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'como-funciona', label: 'Cómo funciona' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const toggleRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  // Cerrar el menú con la tecla Escape y devolver el foco al botón
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  // Resaltar el enlace de la sección que se está viendo
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <Logo />
        </a>

        <nav
          id="main-nav"
          className={`header__nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Principal"
        >
          <ul className="header__list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                
                <a  href={`#${id}`}
                  className={`header__link${activeId === id ? ' is-active' : ''}`}
                  aria-current={activeId === id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Solo visible en pantallas muy pequeñas, donde no cabe en la barra */}
          
           <a href="#contacto"
            className="btn btn--primary btn--block header__cta-panel"
            onClick={closeMenu}
          >
            Solicitar consulta
          </a>
        </nav>

        <div className="header__actions">
          <a href="#contacto" className="btn btn--outline header__cta">
            Solicitar consulta
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="header__toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header