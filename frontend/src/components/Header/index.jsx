import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Header({ onModalOpen }) {
  return (
    <header>
      <a href="#" className="brand-name">
        Headpath
      </a>

      <button type="button" className="plus-icon" onClick={onModalOpen}>
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </header>
  )
}