import { useState } from 'react'

import './style.css'

const FormAddSubject = () => {
  const [subject, setSubject] = useState('')

  const [isLoaded, setIsLoaded] = useState(true)
  const [success, setSuccess] = useState({})
  const [errors, setErrors] = useState({}) 

  async function postSubject() {
    const response = await fetch('/subjects/create', { 
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify({subject, duration: ''})
    })

    const result = await response.json()

    if (response.ok) {
      setSuccess(result)
      setSubject('')
    } 
    else {
      setErrors(result)
    }

    setIsLoaded(true)
  }

  function handleChange(e) {
    setSubject(e.target.value)
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

      <label>
        Nome da matéria
      
        <input 
          type="text"
          name="subject"
          value={subject} 
          onChange={handleChange} 
          autoFocus 
        />  
      </label>
      <div className="subject-error">
        {errors.subject &&
          errors.subject
        }
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