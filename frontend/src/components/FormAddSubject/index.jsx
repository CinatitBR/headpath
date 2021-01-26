import { useState } from 'react'

import './style.css'

const FormAddSubject = () => {
  const [subject, setSubject] = useState('')

  function handleChange(event) {
    console.log(subject)
    setSubject(event.target.value)
  }

  return (
    <form>
      <label htmlFor="subject">Nome da matéria</label>
      <input 
        type="text" 
        name="subject"
        id="subject" 
        value={subject} 
        onChange={handleChange} 
        autoFocus 
      />  

      <button type="submit" className="submit-button">Adicionar</button>
    </form>
  )
}

export default FormAddSubject