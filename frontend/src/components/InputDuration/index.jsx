import { useState } from 'react'

import './style.css'

const InputDuration = () => {
  const [duration, setDuration] = useState('0000')

  function handleInputChange(e) {
    let { value } = e.target

    const valueLength = value.length

    if (valueLength > 4) {
      value = value.slice(1)
    }

    if (valueLength === 3) {
      value = '0' + value
    }

    setDuration(value)
  }

  return (
    <div className="input-duration">
      <div>
        <span 
          className={`digit`} 
          tabIndex="0"
          data-index="3"
        >
          { duration[0] }
        </span>

        <span 
          className={`digit`} 
          tabIndex="0"
          data-index="2"
        >
          { duration[1] }
        </span>
        <span className="symbol">h</span>

        <span 
          className={`digit`} 
          tabIndex="0"
          data-index="1"
        >
          { duration[2] }
        </span>
        <span 
          className={`digit`} 
          tabIndex="0"
          data-index="0"
        >
          { duration[3] }
        </span>
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