import { FaCheck } from 'react-icons/fa'

import style from './style.module.css'

const TimerDisplay = ({ time, timerState }) => {
  console.log(timerState)

  return (
    <div className={style.timerDisplay}>
      {timerState.finished &&
        <div className={`${style.timerFinished}`}>
          <FaCheck className={`${style.checkIcon} ${style.fadeIn}`} />
        </div>
      }

      {!timerState.finished &&
        <div 
          className={`
            ${style.countdown} 
            ${timerState.running === true ? style.running : ''}
            ${timerState.running === false ? style.stopped : ''}
          `}
        >
          {time}
        </div>
      }
    </div>
  )
}

export default TimerDisplay