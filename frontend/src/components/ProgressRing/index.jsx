import { FaMugHot } from 'react-icons/fa'

import style from './style.module.css'

const ProgressRing = ({ radius, strokeWidth, progress }) => {
  const normalizedRadius = radius - (strokeWidth * 2)
  const circumference = normalizedRadius * 2 * Math.PI

  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - ((progress / 100) * circumference)

  return (
    <div 
      className={style.progressRing} 
    >
      <svg 
        height={2 * radius}
        width={2 * radius}
      >
        <circle 
          fill="transparent"
          stroke="#2962FF"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          r={normalizedRadius}
          cx={radius}
          cy={radius} 
          style={{strokeDashoffset}}
        />
      </svg>

      <FaMugHot className={style.icon} />
    </div>
  )
}

export default ProgressRing