import { useState } from 'react'

import DigitDuration from '../DigitDuration/'

import './style.css'

const InputDuration = () => {
  const [duration, setDuration] = useState('0000')

  function handleInputChange(e) {
    let { value } = e.target
  
    const regex = /^[0-9]+$/
    const valueLength = value.length

    const isValid = regex.test(value)

    if (!isValid) {
      return
    }
    if (valueLength > 4) {
      value = value.substring(1)
    }
    if (valueLength === 3) {
      value = '0' + value
    }

    setDuration(value)
  }

  return (
    <div className="input-duration">
      <div>
        <DigitDuration value={duration[0]} />
        <DigitDuration value={duration[1]} />
        <span className="symbol">h</span>

        <DigitDuration value={duration[2]}/>
        <DigitDuration value={duration[3]} />
        <span className="symbol">m</span>
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