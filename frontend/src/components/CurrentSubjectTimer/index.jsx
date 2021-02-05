import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls' 

import style from './style.module.css'

const CurrentSubjectTimer = () => {
  return (
    <div className={style.currentSubjectTimer}>
      <TimerDisplay />

      <CurrentSubject />

      <TimerControls />
    </div>
  )
}

export default CurrentSubjectTimer