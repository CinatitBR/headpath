import ProgressRing from '../ProgressRing'
import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const BreakCountdown = () => {
  return (
    <ProgressRing 
      radius={25}
      strokeWidth={5}
      progress={50}
      progressColor="#03a9f4"
      pathColor="#f3f3f3"
    >
      <FaMugHot size={'25px'} />
    </ProgressRing>
  )
}

export default BreakCountdown