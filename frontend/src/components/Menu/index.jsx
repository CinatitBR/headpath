import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faUndo } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
  const date = new Date(null)

  date.setHours(0)
  date.setMinutes(25)
  date.setSeconds(0)

  const result = date.toTimeString().substr(0, 8)

  return (
    <div className="menu">
      <div className="timer">
        {result}
      </div>

      <div className="subject">
        Matemática
      </div>
      <p className="description">Matéria atual</p>

      <div className="buttons">
        <button type="button">
          <FontAwesomeIcon icon={faPlay} />
        </button>

        <button type="button">
          <FontAwesomeIcon icon={faUndo} />
        </button>
      </div>
    </div>
  )
}