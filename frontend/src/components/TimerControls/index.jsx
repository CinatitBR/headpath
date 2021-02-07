import { useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer}) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const handleControlClick = (e) => {
    e.stopPropagation()
    const { name } = e.currentTarget

    if (name === 'play') {
      onStartTimer()
    }
    else {
      onStopTimer()
    }

    setIsTimerRunning(!isTimerRunning)
  }

  return (
    <div className={style.timerControls}>
      <button
        type="button"
        name="play"
        className={style.timerControl} 
        onClick={handleControlClick}
        disabled={isTimerRunning}
      >
        <FaPlay />
      </button>

      <button
        type="button"
        name="pause"
        className={style.timerControl}
        onClick={handleControlClick}
        disabled={!isTimerRunning}
      >
        <FaPause />
      </button>
    </div>
  )
}

export default TimerControls