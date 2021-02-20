import ProgressRing from '../ProgressRing'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <div className={style.breakCountdown}>
      <details>
        <summary>
          <ProgressRing 
            radius={35}
            strokeWidth={4}
            progress={100}
          />
        </summary>

        <p>Oláaa, tudo bem??</p>
      </details>
    </div>
  )
}

export default BreakCountdown