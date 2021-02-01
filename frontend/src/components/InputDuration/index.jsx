import { useState } from 'react'

import DigitDuration from '../DigitDuration/'

import './style.css'

const InputDuration = () => {
  const initialCursorPos = [false, false, false]

  const [duration, setDuration] = useState('')
  const [isOnFocus, setIsOnFocus] = useState(false)
  const [cursorPos, setCursorPos] = useState(initialCursorPos)

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

    const newCursorPos = [...initialCursorPos]
    newCursorPos[valueLength] = true

    setCursorPos(newCursorPos)
    
    setDuration(value)
  }

  function handleFocus(e) {
    const { value } = e.target 
    const valueLength = value.length

    setIsOnFocus(true)

    const newCursorPos = [...initialCursorPos]
    newCursorPos[valueLength] = true

    setCursorPos(newCursorPos)
  }

  // function handleKeyUp(e) {
  //   const { keyCode, target } = e
  //   const { selectionStart } = target

  //   const leftArrowCode = 37
  //   const rightArrowCode = 39

  //   if (keyCode === leftArrowCode || keyCode === rightArrowCode) {
  //     const newCursorPos = [...initialCursorPos]

  //     newCursorPos[selectionStart] = true

  //     setCursorPos(newCursorPos)
  //   }
  // }

  function handleKeyDown(e) {
    const { target, keyCode } = e
    const { value, selectionStart } = target

    const leftArrowCode = 37
    const upArrowCode = 38
    const rightArrowCode = 39
    const downKeyCode = 40

    let nextSelectionStart
    
    // Calculate the start of next selection
    if (keyCode === leftArrowCode) {
      nextSelectionStart = selectionStart - 1
    }
    else if (keyCode === rightArrowCode) {
      nextSelectionStart = selectionStart + 1
    }

    // Prevents user from going to first position when reaches maximum length
    if (value.length === 3) {
      if (keyCode === upArrowCode || nextSelectionStart === 0) {
        e.preventDefault()
        return
      }
    }

    const arrowKeyCodes = [leftArrowCode, upArrowCode, rightArrowCode, downKeyCode]

    // Update the cursor position in the display
    if (arrowKeyCodes.includes(keyCode)) {
      const newCursorPos = [...initialCursorPos]

      newCursorPos[nextSelectionStart] = true

      setCursorPos(newCursorPos)
    }
  }

  function handleBlur(e) {
    setIsOnFocus(false)
    setCursorPos(initialCursorPos)
  }

  return (
    <div 
      className={`input-duration ${isOnFocus && 'focus'}`}
    >
      <div>
        <DigitDuration 
          value={duration[duration.length - 3]} 
          cursor={cursorPos[duration.length - 2]}
        />
        <span 
          className={`
            symbol 
            ${!duration[duration.length - 3] && 'unsure'}
          `}
        >
          h
        </span>

        <DigitDuration 
          value={duration[duration.length - 2]}
          cursor={cursorPos[duration.length - 1]}
        />
        <DigitDuration 
          value={duration[duration.length - 1]} 
          cursor={cursorPos[duration.length]}
        />
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange} 
      />
    </div>
  )
}

export default InputDuration