import { useState } from 'react'

import DurationInputDisplay from '../DurationInputDisplay'

import style from './style.module.css'

const DurationInput = ({ value, onChange }) => {
  const [isInputOnFocus, setIsInputOnFocus] = useState(false)
  const [cursor, setCursor] = useState(false)

  function handleFocus(e) {
    const { target } = e
    const { value } = target 

    target.selectionStart = value.length
    
    setIsInputOnFocus(true)
    setCursor(true)
  }

  function handleKeyDown(e) {
    const { key } = e

    const allowedDigits = '0123456789'

    // Prevents user from typing not allowed keys
    if (!allowedDigits.includes(key) 
      && key !== 'Backspace'
    ) {
      e.preventDefault()
      return
    }
  }

  function handleBlur() {
    setIsInputOnFocus(false)
    setCursor(false)
  }
  
  return (
    <div className={style.durationInput}>
      <label>
        Duração

        <DurationInputDisplay
          duration={value}
          isInputOnFocus={isInputOnFocus}
          cursor={cursor}
        />

        <input 
          type="tel" 
          name="duration"
          value={value} 
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={onChange} 
        />
      </label>
    </div>
  )
}

export default DurationInput