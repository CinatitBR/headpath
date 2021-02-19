import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <div className={style.breakCountdown}>
      <details>
        <summary>
          <FaMugHot />
        </summary>

        <p>Oláaa, tudo bem??</p>
      </details>

      <div className={style.progressRing}>
        
      </div>
    </div>
  )
}

export default BreakCountdown