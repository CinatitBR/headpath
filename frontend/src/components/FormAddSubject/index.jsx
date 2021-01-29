import { useState } from 'react'

import './style.css'

const FormAddSubject = () => {
  const initialValues = {
    subject: '',
    duration: '00:00'
  }

  const [values, setValues] = useState(initialValues)
  const [isLoaded, setIsLoaded] = useState(true)

  const [success, setSuccess] = useState({})
  const [errors, setErrors] = useState({}) 

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

    setIsLoaded(true)
  }

  function handleInputChange(e) {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoaded(false)

    postSubject()
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="success">
        {success.ok && 
          success.ok  
        }
      </div>

      <div className="field">
        <label>
          Nome da matéria
        
          <input 
            type="text"
            name="subject"
            value={values.subject} 
            onChange={handleInputChange} 
            autoFocus 
          />  
        </label>

        <div className="subject-error">
          {errors.subject &&
            errors.subject
          }
        </div>
      </div>

      <div className="field">
        <label>
          Duração

          <input 
            type="text" 
            name="duration"
            value={values.duration} 
            onChange={handleInputChange} 
          />
        </label>

        <div className="duration-error">
          {errors.duration &&
            errors.duration
          }
        </div>
      </div>

      <button 
        type="submit"
        disabled={!isLoaded}
      >
        Adicionar
      </button>
    </form>
  )
}

export default FormAddSubject