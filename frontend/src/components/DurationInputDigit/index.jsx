import style from './style.module.css'

const DurationInputDigit = ({ value, cursor }) => {
  return (
    <span 
      className={`
        ${style.durationInputDigit} 
        ${value ? '' : style.unsure} 
        ${cursor ? style.cursor : ''}
      `}
      tabIndex="0"
    >
      { value ? value : '0' }
    </span>
  )
}

export default DurationInputDigit