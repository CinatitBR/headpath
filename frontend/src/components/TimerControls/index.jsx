import { useState } from 'react'
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer, timerState, onGetNextSubject, onCallSnackbar}) => {
  const [showPlay, setShowPlay] = useState(true)

  const handleStopTimer = () => {
    onStopTimer()
    
    setShowPlay(false)
    setTimeout(() => setShowPlay(true), 1000)

    onCallSnackbar({ 
      message: 'O relógio foi pausado', 
      delay: 1000
    })
  }
  
  return (
    <div className={style.timerControls}>
      {timerState.finished &&
        <button 
          type="button" 
          className={style.timerControl} 
          onClick={onGetNextSubject}
        >
          <FaArrowRight />
        </button>
      }

      {(!timerState.finished && !timerState.running) &&
        <button
          type="button"
          className={style.timerControl} 
          onClick={onStartTimer}
          disabled={!showPlay}
        >
          <FaPlay />
        </button>
      }

      {(!timerState.finished && timerState.running) && 
        <button
          type="button"
          className={style.timerControl}
          onClick={handleStopTimer}
        >
          <FaPause />
        </button>
      }
    </div>
  )
}

export default TimerControls