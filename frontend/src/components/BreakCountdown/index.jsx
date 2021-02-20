import ProgressRing from '../ProgressRing'
import Tooltip from '../Tooltip'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <div className={style.breakCountdown}>
      <ProgressRing 
        radius={35}
        strokeWidth={4}
        progress={100}
      />

      <Tooltip />
    </div>
  )
}

export default BreakCountdown