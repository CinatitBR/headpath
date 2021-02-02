import { useState } from 'react'

import DigitDuration from '../DigitDuration'

import './style.css'

const InputDuration = ({ duration, onChange }) => {
  const [isOnFocus, setIsOnFocus] = useState(false)
  const [cursor, setCursor] = useState(false)

  function handleFocus(e) {
    const { target } = e
    const { value } = target 

    target.selectionStart = value.length
    
    setIsOnFocus(true)
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
    setIsOnFocus(false)
    setCursor(false)
  }

  return (
    <div 
      className={`input-duration ${isOnFocus ? 'focus' : ''}`}
    >
      <div>
        <DigitDuration 
          value={duration[duration.length - 3]} 
        />
        <span 
          className={`
            symbol 
            ${!duration[duration.length - 3] ? 'unsure' : ''}
          `}
        >
          h
        </span>

        <DigitDuration 
          value={duration[duration.length - 2]}
        />
        <DigitDuration 
          value={duration[duration.length - 1]} 
          cursor={cursor}
        />
        <span 
          className={`
            symbol 
            ${!duration[duration.length - 1] ? 'unsure' : ''}
          `}
        >
          m
        </span>
      </div>

      <input 
        type="tel" 
        name="duration"
        value={duration} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={onChange} 
      />
    </div>
  )
}

export default InputDuration