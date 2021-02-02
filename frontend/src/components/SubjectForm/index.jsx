import { useState, useEffect } from 'react'

import TextInput from '../TextInput'
import DurationInput from '../DurationInput'

import './style.css'

function useValidator() {
  const subjectValidation = subject => {
    if (subject.trim() === '') {
      return 'Por favor, digite o nome da matéria'
    }
    if (subject.length > 50) {
      return 'O nome da matéria pode ter no máximo 50 caracteres'
    }

    return null
  }

  const durationValidation = duration => {
    const allowedFormat = /^\d{1,4}$/

    if (duration.trim() === '') {
      return 'Por favor, digite a duração da matéria'
    }
    if (!allowedFormat.test(duration)) {
      return 'A duração é inválida'
    }

    return null
  }

  const validator = {
    subject: subjectValidation, 
    duration: durationValidation
  }

  return validator
}

const SubjectForm = () => {
  const initialValues = {
    subject: '',
    duration: ''
  }

  const [values, setValues] = useState(initialValues)

  const [showButton, setShowButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [success, setSuccess] = useState({})
  const [errors, setErrors] = useState({subject: null, duration: null}) 
  const [fieldsTouched, setFieldsTouched] = 
    useState({subject: false, duration: false})

  const validator = useValidator()

  async function postSubject() {
    const data = {
      subject: values.subject, 
      duration: values.duration
    }

    const response = await fetch('/subjects/create', { 
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(data)
    })

    const feedback = await response.json()

    if (response.ok) {
      setSuccess(feedback)
      setValues(initialValues)
    } 
    else {
      setErrors(feedback)
    }

    setShowButton(true)
    setIsLoading(false)
  }

  function handleInputChange(e) {
    const { name, value } = e.target

    let newValue = value

    // Limits value length to 3 digits 
    if (name === 'duration' 
      && value.length > 3
    ) {
      newValue = value.substring(1)
    }

    // Set new value
    setValues({
      ...values,
      [name]: newValue
    })

    const newError = validator[name](value)

    // If there is no error, clean the error field
    if (!newError) {
      setErrors({
        ...errors,
        [name]: newError
      })
    }

    // Set field as touched
    setFieldsTouched({
      ...fieldsTouched,
      [name]: true
    })
  }

  function handleInputBlur(e) {
    const { target, relatedTarget } = e
    const { name, value } = target

    // Check if modal was clicked
    const modalGainedFocus = relatedTarget ? 
      relatedTarget.id === 'modal' : 
      false

    // If modal was not clicked
    if (!modalGainedFocus) return

    // If field has not been touched
    if (!fieldsTouched[name]) return

    // Check for new error
    setErrors({
      ...errors,
      [name]: validator[name](value)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setShowButton(false)
    setIsLoading(true)

    postSubject()
  }

  useEffect(() => {
    const areAllFieldsTouched = fieldsTouched.subject && fieldsTouched.duration
    const errorsExist = errors.subject || errors.duration

    // Check if all fields were touched
    if (areAllFieldsTouched) {
      // Check if there are errors
      errorsExist ? 
        setShowButton(false) 
        : setShowButton(true)
    }
  }, [errors, fieldsTouched])

  return (
    <form onSubmit={handleSubmit}>
      <div className="success">
        {success.ok && 
          success.ok  
        }
      </div>

      <div className="fields">
        <TextInput
          label="Nome da matéria"
          name="subject"
          value={values.subject}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus={true}
          error={errors.subject}
        />

        <DurationInput 
          value={values.duration}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={errors.duration}
        /> 
      </div>

      <button 
        type="submit"
        disabled={!showButton}
      >
        {isLoading ? 'Adicionando' : 'Adicionar'}
      </button>
    </form>
  )
}

export default SubjectForm