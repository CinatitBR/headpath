import ProgressRing from '../ProgressRing'
import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const BreakCountdown = ({ progress }) => {
  return (
    <div className={style.breakCountdown}>
      <button type="button">
        <ProgressRing 
          radius={25}
          strokeWidth={5}
          progress={progress}
          progressColor="var(--light-black)"
          pathColor="var(--grey)"
        >
          <FaMugHot size={'25px'} color={'var(--light-black)'} />
        </ProgressRing>
      </button>
    </div>
  )
}

export default BreakCountdown