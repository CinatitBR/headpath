import DurationInputDigit from '../DurationInputDigit'

import style from './style.module.css'

const DurationInputDisplay = ({ duration, isInputOnFocus, cursor }) => {
  const durationLength = duration.length

  const hour = duration[durationLength - 3]
  const minutes = duration.slice()

  return (
    <div
      className={`
        ${style.durationInputDisplay}
        ${isInputOnFocus ? style.focus : ''}
      `} 
    >
      <DurationInputDigit value={hour} />
      <span 
        className={`${style.symbol} ${!hour ? style.unsure : ''}`}
      >
        h
      </span>

      <DurationInputDigit value={minutes[1]} />
      <DurationInputDigit value={minutes[0]} cursor={cursor} />
      <span 
        className={`${style.symbol} ${!minutes[0] ? style.unsure : ''}`}
      >
        m
      </span>
    </div>
  )
}

export default DurationInputDisplay