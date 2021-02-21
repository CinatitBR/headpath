import style from './style.module.css'

const ProgressRing = ({ radius, strokeWidth, progress, progressColor, pathColor, contentColor, children }) => {
  const circumference = radius * 2 * Math.PI
  const height = (2 * radius) + strokeWidth
  const width = (2 * radius) + strokeWidth
  const circleTranslate = `translate(${strokeWidth / 2}px, ${strokeWidth / 2}px)`

  const measurements = {
    height,
    width
  }

  const circleStyle = {
    ...measurements,
    fill: 'none',
    strokeWidth: strokeWidth,
    transform: circleTranslate,
    strokeDasharray: circumference,
    strokeDashoffset: circumference,
    strokeLinecap: 'round'
  }

  const circle1Style = {
    ...circleStyle,
    strokeDashoffset: 0,
    stroke: pathColor
  }

  const circle2Style = {
    ...circleStyle,
    strokeDashoffset: circumference - circumference * (progress / 100),
    stroke: progressColor
  }

  return (
    <div className={style.progressRing} style={{...measurements}}>
      <svg style={{...measurements}}>
        <circle 
          cx={radius} 
          cy={radius} 
          r={radius}
          style={circle1Style}
        />

        <circle 
          cx={radius} 
          cy={radius} 
          r={radius}
          style={circle2Style}
        />
      </svg>
      
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default ProgressRing