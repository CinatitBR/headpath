import style from './style.module.css'

const ProgressRing = ({ radius, strokeWidth, strokeColor, contentColor, progress, children }) => {
  const svgHeight = 2 * radius
  const svgWidth = 2 * radius

  const normalizedRadius = radius - (strokeWidth * 2)
  const circumference = normalizedRadius * 2 * Math.PI

  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - ((progress / 100) * circumference)

  const fontSize = `${radius - 5}px`

  return (
    <div 
      className={style.progressRing} 
      style={{height: svgHeight}}
    >
      <svg 
        height={svgHeight}
        width={svgWidth}
      >
        <circle 
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius} 
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          style={{strokeDashoffset, stroke: strokeColor}}
        />
      </svg>

      <div className={style.content} style={{ fontSize, color: contentColor }}>
        {children}
      </div>
    </div>
  )
}

export default ProgressRing