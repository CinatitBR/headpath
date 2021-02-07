import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faUndo } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

const TimerControls = ({ onStartTimer, onStopTimer }) => {
  return (
    <div className={style.timerControls}>
      <button
        type="button"
        className={style.timerControl}
        onClick={onStartTimer}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>

      <button
        type="button"
        className={style.timerControl}
        onClick={onStopTimer}
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
    </div>
  )
}

export default TimerControls
