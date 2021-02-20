import ProgressRing from '../ProgressRing'
import { FaPlus } from 'react-icons/fa'

import style from './style.module.css'

const Header = ({ onModalOpen }) => {
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

      <ProgressRing
        radius={40}
        strokeWidth={4}
        progress={100}
      />
    </header>
  )
}

export default Header