import TimerDisplay from '../TimerDisplay'
import CurrentSubject from '../CurrentSubject'
import TimerControls from '../TimerControls' 

import './style.css'

const CurrentSubjectTimer = () => {
  return (
    <div className="current-subject-timer">
      <TimerDisplay />

      <CurrentSubject />

      <TimerControls />
    </div>
  )
}

export default CurrentSubjectTimer