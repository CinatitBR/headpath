import { FaPlay, FaPause } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer, isTimerRunning}) => {
  return (
    <div className={style.timerControls}>
      {!isTimerRunning &&
        <button
          type="button"
          className={style.timerControl} 
          onClick={onStartTimer}
        >
          <FaPlay />
        </button>
      }

      {isTimerRunning && 
        <button
          type="button"
          className={style.timerControl}
          onClick={onStopTimer}
        >
          <FaPause />
        </button>
      }
    </div>
  )
}

export default TimerControls