import BreakCountdown from '../BreakCountdown'
import { FaPlus } from 'react-icons/fa'

import style from './style.module.css'

const Header = ({ onModalOpen, durationProgress }) => {
  return (
    <header className={style.mainHeader}>
      <a href="#" className={style.brandName}>
        Headpath
      </a>

      <button
        type="button" 
        className={style.openModalIcon}
        onClick={onModalOpen}
      >
        <FaPlus />
      </button>

      <BreakCountdown progress={durationProgress} />
    </header>
  )
}

export default Header