import { useState } from 'react'
import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls'

import timeHelper from '../../services/timeHelper'
import style from './style.module.css'

// const initialTimerState = {
//   running: false,
//   stopped: true
// }

const CurrentSubjectTimer = ({ currentSubject: { subject, duration } }) => {
  const durationMilliseconds = timeHelper
    .fromTimeToMilliseconds(duration)

  const [millisecondsLeft, setMillisecondsLeft] = useState(durationMilliseconds)
  const [timerId, setTimerId] = useState(null)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const formatedMilliseconds = timeHelper
    .fromMillisecondsToTime(millisecondsLeft)

  const start = () => {
    if (timerId) return

    const newTimerId = setInterval(() => {
      setMillisecondsLeft(prevMillisecondsLeft =>
        prevMillisecondsLeft - 1000
      )
    }, 1000)

    setTimerId(newTimerId)
    setIsTimerRunning(!isTimerRunning)
  }

  const stop = () => {
    if (!timerId) return

    clearInterval(timerId)
    setTimerId(null)
    setIsTimerRunning(!isTimerRunning)
  }

  return (
    <section className={style.currentSubjectTimer}>
      <TimerDisplay 
        time={formatedMilliseconds} 
        isTimerRunning={isTimerRunning}
      />

      <CurrentSubject subject={subject} />

      <TimerControls
        onStartTimer={start} 
        onStopTimer={stop} 
        isTimerRunning={isTimerRunning}
      />
    </section>
  )
}

export default CurrentSubjectTimer