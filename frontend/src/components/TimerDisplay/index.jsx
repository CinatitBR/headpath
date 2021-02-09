import { FaCheck } from 'react-icons/fa'

import style from './style.module.css'

const TimerDisplay = ({ time, isTimerRunning }) => {
  return (
    <div className={style.timerDisplay}>
      <div className={style.timerFinished}>
        <FaCheck className={style.checkIcon} />
      </div>

      {/* <div 
        className={`
          ${style.countdown} 
          ${isTimerRunning === true ? style.running : ''}
          ${isTimerRunning === false ? style.stopped : ''}
        `}
      >
        {time}
      </div> */}
    </div>
  )
}

export default TimerDisplay