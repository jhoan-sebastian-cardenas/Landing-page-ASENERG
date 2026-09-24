import { useEffect, useRef, useState } from 'react'

const INITIAL_VALUES = {
  name: '',
  phone: '',
  email: '',
  clientType: '',
  message: '',
  consent: false,
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// Móvil o fijo español: 9 dígitos que empiezan por 6-9, con +34 opcional
const PHONE_REGEX = /^(\+34[\s-]?)?[6-9]\d{2}([\s-]?\d{3}){2}$/

const SUBMIT_DELAY_MS = 900

// El orden de las claves coincide con el orden de los campos del formulario
function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Introduce tu nombre.'
  }
  if (values.phone.trim() && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Introduce un teléfono válido.'
  }
  if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'Introduce un email válido.'
  }
  if (!values.clientType) {
    errors.clientType = 'Selecciona un tipo de cliente.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Cuéntanos brevemente tu situación.'
  }
  if (!values.consent) {
    errors.consent = 'Acepta la política de privacidad para continuar.'
  }

  return errors
}

export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target

    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))

    // El error de un campo desaparece en cuanto el usuario lo corrige
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    const validationErrors = validate(values)
    setErrors(validationErrors)

    const [firstInvalid] = Object.keys(validationErrors)
    if (firstInvalid) {
      event.currentTarget.elements.namedItem(firstInvalid)?.focus()
      return
    }

    // Envío simulado: no hay backend real
    setStatus('submitting')
    timerRef.current = setTimeout(() => setStatus('success'), SUBMIT_DELAY_MS)
  }

  return { values, errors, status, handleChange, handleSubmit }
}