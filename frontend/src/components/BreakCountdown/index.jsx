import ProgressRing from '../ProgressRing'
import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <div className={style.breakCountdown}>
      <ProgressRing 
        radius={25}
        strokeWidth={5}
        progress={50}
        progressColor="#03a9f4"
        pathColor="#E1E1E1"
      >
        <button type="button">
          <FaMugHot size={'25px'} color={'var(--blue)'} />
        </button>
      </ProgressRing>
    </div>
  )
}

export default BreakCountdown