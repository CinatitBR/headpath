import ProgressRing from '../ProgressRing'
import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <div className={style.breakCountdown}>
      <button type="button">
        <ProgressRing 
          radius={25}
          strokeWidth={5}
          progress={50}
          progressColor="var(--brown)"
          pathColor="var(--grey)"
        >
          <FaMugHot size={'25px'} color={'var(--brown)'} />
        </ProgressRing>
      </button>
    </div>
  )
}

export default BreakCountdown