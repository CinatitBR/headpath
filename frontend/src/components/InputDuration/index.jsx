import { useState } from 'react'

import DigitDuration from '../DigitDuration/'

import './style.css'

const InputDuration = () => {
  const [duration, setDuration] = useState('')

  function handleInputChange(e) {
    let { value } = e.target
  
    const regex = /^[0-9]+$|^$/
    const valueLength = value.length

    const isValid = regex.test(value)

    if (!isValid) {
      return
    }
    if (valueLength > 3) {
      value = value.substring(1)
    }
    
    setDuration(value)
  }

  return (
    <div className="input-duration">
      <div>
        <DigitDuration value={duration[duration.length - 3]} />
        <span 
          className={`
            symbol 
            ${!duration[duration.length - 3] && 'unsure'}
          `}
        >
          h
        </span>

        <DigitDuration value={duration[duration.length - 2]}/>
        <DigitDuration value={duration[duration.length - 1]} />
        <span 
          className={`
            symbol 
            ${!duration[duration.length - 1] && 'unsure'}
          `}
        >
          m
        </span>
      </div>

      <input 
        type="tel" 
        value={duration} 
        onChange={handleInputChange} 
      />
    </div>
  )
}

export default InputDuration