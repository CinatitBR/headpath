import { FaPlay, FaPause } from 'react-icons/fa'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer }) => {
  return (
    <div className={style.timerControls}>
      <button
        type="button"
        className={style.timerControl}
        onClick={onStartTimer}
      >
        <FaPlay />
      </button>

      <button
        type="button"
        className={style.timerControl}
        onClick={onStopTimer}
      >
        <FaPause />
      </button>
    </div>
  )
}

export default TimerControls
