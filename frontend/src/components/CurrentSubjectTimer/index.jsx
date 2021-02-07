import { useState } from 'react'

import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls' 

import style from './style.module.css'

const defaultCurrentSubject = {
  subject: null, 
  duration: null
}

const CurrentSubjectTimer = ({ currentSubject = defaultCurrentSubject }) => {
  const { subject, duration } = currentSubject

  const start = () => {
    const startTime = Date.now()
    const endTime = startTime

  }

  if (!(subject && duration)) return null

  return (
    <section className={style.currentSubjectTimer}>
      <TimerDisplay duration={duration} />

      <CurrentSubject subject={subject} />

      <TimerControls 
        onStartTimer={start} 
        // onStopTimer={stopTimer} 
      />
    </section>
  )
}

export default CurrentSubjectTimer