import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faUndo } from '@fortawesome/free-solid-svg-icons'

const TimerControls = () => {
  return (
    <div className="buttons">
      <button type="button">
        <FontAwesomeIcon icon={faPlay} />
      </button>

      <button type="button">
        <FontAwesomeIcon icon={faUndo} />
      </button>
    </div>
  )
}

export default TimerControls