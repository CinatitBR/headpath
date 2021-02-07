import { useState } from 'react'

import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls'

import timeHelper from '../../services/timeHelper'
import style from './style.module.css'

const CurrentSubjectTimer = ({ currentSubject: { subject, duration } }) => {
  const [millisecondsLeft, setMillisecondsLeft] = useState(
    timeHelper.fromTimeToMilliseconds(duration)
  )
  const [timerId, setTimerId] = useState(null)

  const formatedMilliseconds = 
    timeHelper.fromMillisecondsToTime(millisecondsLeft)

  const start = () => {
    if (timerId) return

    const newTimerId = setInterval(() => {
      setMillisecondsLeft(prevMillisecondsLeft => 
        prevMillisecondsLeft - 1000
      )
    }, 1000)

    setTimerId(newTimerId)
  }

  const stop = () => {
    if (!timerId) return

    clearInterval(timerId)
    setTimerId(null)
  }

  return (
    <section className={style.currentSubjectTimer}>
      <TimerDisplay time={formatedMilliseconds} />

      <CurrentSubject subject={subject} />

      <TimerControls
        onStartTimer={start} 
        onStopTimer={stop} 
      />
    </section>
  )
}

export default CurrentSubjectTimer