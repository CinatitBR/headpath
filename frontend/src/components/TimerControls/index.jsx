import { useState } from 'react'
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer, timerState, onGetNextSubject, onCallSnackbar}) => {
  const [showPlay, setShowPlay] = useState(true)
  const [showStop, setShowStop] = useState(true)
  const [showNext, setShowNext] = useState(true)

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

  const handleControlClick = e => {
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

  const handleGetNextSubject = async () => {
    setShowNext(false)

    await onGetNextSubject()

    setShowNext(true)
  }
  
  return (
    <div className={style.timerControls}>
      {timerState.finished &&
        <button 
          type="button" 
          className={style.timerControl} 
          disabled={!showNext}
          onClick={handleGetNextSubject}
        >
          <FaArrowRight />
        </button>
      }

      {(!timerState.finished && !timerState.running) &&
        <button
          type="button"
          name="play"
          className={style.timerControl} 
          disabled={!showPlay}
          onClick={handleControlClick}
        >
          <FaPlay />
        </button>
      }

      {(!timerState.finished && timerState.running) && 
        <button
          type="button"
          name="stop"
          className={style.timerControl}
          disabled={!showStop}
          onClick={handleControlClick}
        >
          <FaPause />
        </button>
      }
    </div>
  )
}

export default TimerControls