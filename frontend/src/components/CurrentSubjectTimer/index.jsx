import { useState, useEffect } from 'react'
import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls'

import timeHelper from '../../services/timeHelper'
import style from './style.module.css'

const initialTimerState = {
  running: null,
  finished: false
}

const CurrentSubjectTimer = ({ currentSubject: { subject, duration }, setCurrentSubject }) => {
  const durationMilliseconds = timeHelper
    .fromTimeToMilliseconds(duration)

  const [millisecondsLeft, setMillisecondsLeft] = useState(durationMilliseconds)
  const [timerId, setTimerId] = useState(null)
  const [timerState, setTimerState] = useState(initialTimerState)

  const formattedMilliseconds = timeHelper
    .fromMillisecondsToTime(millisecondsLeft)

  const start = () => {
    if (timerId) return

    const newTimerId = setInterval(() => {  
      setMillisecondsLeft(prevMillisecondsLeft =>
        prevMillisecondsLeft - 1000
      )
    }, 1000)

    setTimerId(newTimerId)
    setTimerState({
      ...timerState, 
      running: true
    })
  }

  const stop = () => {
    if (!timerId) return

    clearInterval(timerId)
    setTimerId(null)

    setTimerState({
      ...timerState, 
      running: false
    })
  }

  const restartTimer = () => {
    setCurrentSubject()
    setMillisecondsLeft(durationMilliseconds)

    setTimerState(initialTimerState)
  }

  useEffect(() => {
    const shutdownTimer = () => {
      clearInterval(timerId)
      setTimerId(null)

      setTimerState({
        running: null,
        finished: true
      })
    }

    if (millisecondsLeft === 1495000) {
      setTimeout(shutdownTimer, 1000)
    }
  }, [millisecondsLeft, timerId])

  return (
    <section className={style.currentSubjectTimer}>
      <TimerDisplay 
        time={formattedMilliseconds} 
        timerState={timerState}
      />

      <CurrentSubject subject={subject} timerState={timerState} />

      <TimerControls
        onStartTimer={start} 
        onStopTimer={stop} 
        timerState={timerState}
        onGetNextSubject={restartTimer}
      />
    </section>
  )
}

export default CurrentSubjectTimer