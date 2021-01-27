import { useState } from 'react'

import './style.css'

const FormAddSubject = () => {
  const [subject, setSubject] = useState('')

  const [isLoaded, setIsLoaded] = useState(true)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null) 

  async function postSubject() {
    const response = await fetch('/subjects/create', { 
      headers: {
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify({subject, duration: '00:45:00'})
    })

    const result = await response.json()

    if (response.ok) {
      setSuccess(result.success)
      setSubject('')
    } 
    else {
      setError(result.error)
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

      {error && 
        <p>{error}</p>
      }

      {success && 
        <p>{success}</p>
      }

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