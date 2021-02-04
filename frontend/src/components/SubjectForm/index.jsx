import { useState, useEffect } from 'react'
import useValidator from '../../hooks/useValidator'

import formatDuration from '../../services/formatDuration.js'

import TextInput from '../TextInput'
import DurationInput from '../DurationInput'

import './style.css'

const SubjectForm = ({ onSubjectCreated }) => {
  const initialValues = {
    subject: '',
    duration: ''
  }

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({}) 
  const [successMessage, setSuccessMessage] = useState(null)
  const [fieldsTouched, setFieldsTouched] = useState({})

  const [showButton, setShowButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const validator = useValidator()

  const areAllFieldsTouched = fieldsTouched.subject && fieldsTouched.duration
  const errorsExist = errors.subject || errors.duration

  const handleInputChange = (e) => {
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

    // Check for new error
    const newError = validator[name](newValue)

    // Set new error
    setErrors({
      ...errors,
      [name]: newError
    })

    // Set field as touched
    setFieldsTouched({
      ...fieldsTouched,
      [name]: true
    })
  }

  const postSubject = async () => {
    const formatedDuration = formatDuration(values.duration)
    const data = {
      subject: values.subject, 
      duration: formatedDuration
    }

    const response = await fetch('/subjects/create', { 
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(data)
    })

    const feedback = await response.json()

    setShowButton(true)
    setIsLoading(false)

    // If request was not successful
    if (!response.ok) {
      setErrors(feedback)
    } 

    const { newSubject } = feedback

    onSubjectCreated(newSubject)
    setValues(initialValues)
    setSuccessMessage('Matéria adicionada com sucesso 🥳🥳')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setShowButton(false)
    setIsLoading(true)
    postSubject()
  }

  useEffect(() => {
    // Check if all fields were touched
    if (areAllFieldsTouched) {
      // Check if there are errors
      errorsExist ? 
        setShowButton(false) 
        : setShowButton(true)
    }
  }, [errorsExist, areAllFieldsTouched])

  return (
    <form onSubmit={handleSubmit}>
      <div className="success">
        {successMessage && 
          successMessage 
        }
      </div>

      <div className="fields">
        <TextInput
          label="Nome da matéria"
          name="subject"
          value={values.subject}
          onChange={handleInputChange}
          autoFocus={true}
          error={errors.subject}
        />

        <DurationInput 
          value={values.duration}
          onChange={handleInputChange}
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