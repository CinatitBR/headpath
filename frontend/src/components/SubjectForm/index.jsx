import { useState, useEffect } from 'react'
import useValidator from '../../hooks/useValidator'

import formatDuration from '../../services/formatDuration.js'

import TextInput from '../TextInput'
import DurationInput from '../DurationInput'

import './style.css'

const SubjectForm = () => {
  const initialValues = {
    subject: '',
    duration: ''
  }

  const [values, setValues] = useState(initialValues)
  const [success, setSuccess] = useState({})
  const [errors, setErrors] = useState({}) 

  const [showButton, setShowButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [fieldsTouched, setFieldsTouched] = useState({})
  const validator = useValidator()

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
    const newError = validator[name](value)

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

    // If request was successful
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

  const handleSubmit = (e) => {
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
        {success.feedback && 
          success.feedback  
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