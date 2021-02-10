import { FaPlay, FaPause } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer, timerState}) => {
  return (
    <div className={style.timerControls}>
      {!timerState.running &&
        <button
          type="button"
          className={style.timerControl} 
          onClick={onStartTimer}
        >
          <FaPlay />
        </button>
      }

      {timerState.running && 
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