import ProgressRing from '../ProgressRing'

import { FaPlus, FaMugHot } from 'react-icons/fa'

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


      <div className="breakCountdown">
        <button type="button">
          <ProgressRing
            radius={30}
            strokeWidth={4}
            strokeColor="var(--light-black)"
            contentColor="var(--light-black)"
            progress={80}
          >
            <FaMugHot />
          </ProgressRing>
        </button>
      </div>
    </header>
  )
}

export default Header