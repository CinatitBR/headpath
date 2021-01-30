import { useState } from 'react'

import './style.css'

const InputDuration = () => {
  const defaultFocusState = [false, false, false, false]

  const [digitFocus, setDigitFocus] = useState(defaultFocusState)

  function handleDigitFocus(e) {
    const digitIndex = e.target.dataset.index

    const newFocusState = [...defaultFocusState]
    newFocusState[digitIndex] = true

    setDigitFocus(newFocusState)
  }

  return (
    <div className="input-duration">
      <div>
        <span 
          className={`digit ${digitFocus[3] && 'cursor'}`} 
          tabIndex="0"
          data-index="3"
          onFocus={handleDigitFocus}
        >
          0
        </span>

        <span 
          className={`digit ${digitFocus[2] && 'cursor'}`} 
          tabIndex="0"
          data-index="2"
          onFocus={handleDigitFocus}
        >
          0
        </span>
        <span className="symbol">h</span>

        <span 
          className={`digit ${digitFocus[1] && 'cursor'}`} 
          tabIndex="0"
          data-index="1"
          onFocus={handleDigitFocus}
        >
          0
        </span>
        <span 
          className={`digit ${digitFocus[0] && 'cursor'}`} 
          tabIndex="0"
          data-index="0"
          onFocus={handleDigitFocus}
        >
          0
        </span>
        <span className="symbol">m</span>
      </div>

      <input type="tel" />
    </div>
  )
}

export default InputDuration