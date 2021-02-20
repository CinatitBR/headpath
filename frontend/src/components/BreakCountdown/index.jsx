import ProgressRing from '../ProgressRing'
import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <div className={style.breakCountdown}>
      {/* <details>
        <summary>
          <FaMugHot />
        </summary>

        <p>Oláaa, tudo bem??</p>
      </details> */}

      <ProgressRing 
        radius={35}
        strokeWidth={4}
        progress={100}
      />
    </div>
  )
}

export default BreakCountdown