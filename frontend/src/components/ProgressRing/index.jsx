import style from './style.module.css'

const ProgressRing = ({ radius, strokeWidth, strokeColor, contentColor, progress, children }) => {
  // const svgHeight = 2 * radius
  // const svgWidth = 2 * radius

  // const normalizedRadius = radius - (strokeWidth * 2)
  // const circumference = normalizedRadius * 2 * Math.PI

  // const strokeDasharray = `${circumference} ${circumference}`
  // const strokeDashoffset = circumference - ((progress / 100) * circumference)

  // const fontSize = `${radius - 5}px`

  return (
    <div className={style.progressRing}>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      
      <div className={style.number}>
        <h2>87<span>%</span></h2>
      </div>
    </div>
  )
}

export default ProgressRing