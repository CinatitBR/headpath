import { useState } from 'react'

import DigitDuration from '../DigitDuration'

import './style.css'

const DurationInput = ({ value, onChange, error }) => {
  const [isFieldOnFocus, setIsFieldOnFocus] = useState(false)
  const [cursor, setCursor] = useState(false)

  function handleFocus(e) {
    const { target } = e
    const { value } = target 

    target.selectionStart = value.length
    
    setIsFieldOnFocus(true)
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

  function handleBlur(e) {
    setIsFieldOnFocus(false)
    setCursor(false)
  }

  return (
    <div 
      className={`field duration-input`}
    >
      <label>
        Duração

        <div className={`duration-display ${isFieldOnFocus ? 'focus' : ''}`}>
          <DigitDuration 
            value={value[value.length - 3]} 
          />
          <span 
            className={`
              symbol 
              ${!value[value.length - 3] ? 'unsure' : ''}
            `}
          >
            h
          </span>

          <DigitDuration 
            value={value[value.length - 2]}
          />
          <DigitDuration 
            value={value[value.length - 1]} 
            cursor={cursor}
          />
          <span 
            className={`
              symbol 
              ${!value[value.length - 1] ? 'unsure' : ''}
            `}
          >
            m
          </span>
        </div>

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

      <div className="error">
        { error && error }
      </div>
    </div>
  )
}

export default DurationInput