import { useState } from 'react'
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer, timerState, onGetNextSubject, onCallSnackbar}) => {
  const [showPlay, setShowPlay] = useState(true)
  const [showStop, setShowStop] = useState(true)

  const disableStopControl = delay => {
    onStartTimer()
    setShowStop(false)
    setTimeout(() => setShowStop(true), delay)
  }

  const disablePlayControl = delay => {
    onStopTimer()
    setShowPlay(false)
    setTimeout(() => setShowPlay(true), delay)
  }

  const handleControlClick = (e) => {
    const { name } = e.currentTarget

    const snackbarDelay = 700
    let snackbarMessage = ''

    switch (name) {
      case 'play':
        disableStopControl(snackbarDelay)
        snackbarMessage = 'O timer foi iniciado'
        break

      case 'stop':
        disablePlayControl(snackbarDelay)
        snackbarMessage = 'O timer foi pausado'
        break

      default:
        return
    }

    onCallSnackbar({ 
      message: snackbarMessage,
      delay: snackbarDelay
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
          name="play"
          className={style.timerControl} 
          onClick={handleControlClick}
          disabled={!showPlay}
        >
          <FaPlay />
        </button>
      }

      {(!timerState.finished && timerState.running) && 
        <button
          type="button"
          name="stop"
          className={style.timerControl}
          onClick={handleControlClick}
          disabled={!showStop}
        >
          <FaPause />
        </button>
      }
    </div>
  )
}

export default TimerControls