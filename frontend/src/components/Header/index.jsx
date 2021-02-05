import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

const Header = ({ onModalOpen }) => {
  return (
    <header>
      <a href="#" className={style.brandName}>
        Headpath
      </a>

      <button
        type="button" 
        className={style.openModalIcon}
        onClick={onModalOpen}
      >
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </header>
  )
}

export default Header