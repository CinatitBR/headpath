import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls' 

import style from './style.module.css'

const defaultCurrentSubject = {
  subject: '-', 
  duration: '00:00:00'
}

const CurrentSubjectTimer = ({ currentSubject = defaultCurrentSubject }) => {
  const { subject, duration } = currentSubject
  
  return (
    <section className={style.currentSubjectTimer}>
      <TimerDisplay duration={duration} />

      <CurrentSubject subject={subject} />

      <TimerControls />
    </section>
  )
}

export default CurrentSubjectTimer