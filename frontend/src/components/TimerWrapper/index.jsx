import { useState, useEffect } from 'react'
import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls'

import timeHelper from '../../services/timeHelper'
import style from './style.module.css'

const initialTimerState = {
  running: null,
  finished: false,
}

const TimerWrapper = ({
  currentSubject: { subject, duration },
  setCurrentSubject,
  onCallSnackbar,
  updateDurationProgress
}) => {
  const durationMilliseconds = timeHelper.fromTimeToMilliseconds(duration)

  const [millisecondsLeft, setMillisecondsLeft] = useState(durationMilliseconds)
  const [timerId, setTimerId] = useState(null)
  const [timerState, setTimerState] = useState(initialTimerState)

  const timeFormat = timeHelper.fromMillisecondsToTime(millisecondsLeft)


  const start = () => {
    if (timerId) return

    const tick = () => {
      setMillisecondsLeft((prevMillisecondsLeft) => prevMillisecondsLeft - 1000)
    }

    // Call tick immediately the first time
    setTimeout(tick, 0)

    const newTimerId = setInterval(tick, 1000)
    setTimerId(newTimerId)

    setTimerState({
      ...timerState,
      running: true,
    })
  }

  const stop = () => {
    if (!timerId) return

    clearInterval(timerId)
    setTimerId(null)

    setTimerState({
      ...timerState,
      running: false,
    })
  }

  const restart = () => {
    setCurrentSubject()
    setMillisecondsLeft(durationMilliseconds)

    setTimerState(initialTimerState)
  }

  useEffect(() => {
    const millisecondsPassed = durationMilliseconds - millisecondsLeft

    updateDurationProgress(durationMilliseconds, millisecondsPassed)
  }, [durationMilliseconds, millisecondsLeft, updateDurationProgress])

  useEffect(() => {
    const shutdown = () => {
      clearInterval(timerId)
      setTimerId(null)

      setTimerState({
        running: null,
        finished: true,
      })
    }

    const shutdownTime = 0

    if (millisecondsLeft === shutdownTime) {
      setTimeout(shutdown, 1000)
    }
  }, [millisecondsLeft, timerId])

  return (
    <section className={style.timerWrapper}>
      <TimerDisplay time={timeFormat} timerState={timerState} />

      <CurrentSubject subject={subject} timerState={timerState} />

      <TimerControls
        onStartTimer={start}
        onStopTimer={stop}
        onGetNextSubject={restart}
        timerState={timerState}
        onCallSnackbar={onCallSnackbar}
      />
    </section>
  )
}

export default TimerWrapper
