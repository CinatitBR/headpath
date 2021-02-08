import { useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer, isTimerRunning}) => {
  return (
    <div className={style.timerControls}>
      <button
        type="button"
        name="play"
        className={style.timerControl} 
        onClick={onStartTimer}
        disabled={isTimerRunning}
      >
        <FaPlay />
      </button>

      <button
        type="button"
        name="pause"
        className={style.timerControl}
        onClick={onStopTimer}
        disabled={!isTimerRunning}
      >
        <FaPause />
      </button>
    </div>
  )
}

export default TimerControls