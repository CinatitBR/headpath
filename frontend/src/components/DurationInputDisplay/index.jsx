import DurationInputDigit from '../DurationInputDigit'

import style from './style.module.css'

const DurationInputDisplay = ({ duration, isInputOnFocus, cursor }) => {
  return (
    <div
      className={
        style.durationInputDisplay + ' ' +
        (isInputOnFocus ? style.focus : '')
      } 
      // className={`
      //   durationInputDisplay 
      //   ${isInputOnFocus ? 'focus' : ''}
      // `}
    >
      <DurationInputDigit 
        value={duration[duration.length - 3]} 
      />
      <span 
        className={`
          ${style.symbol} 
          ${!duration[duration.length - 3] ? style.unsure : ''}
        `}
      >
        h
      </span>

      <DurationInputDigit 
        value={duration[duration.length - 2]}
      />
      <DurationInputDigit 
        value={duration[duration.length - 1]} 
        cursor={cursor}
      />
      <span 
        className={`
          ${style.symbol} 
          ${!duration[duration.length - 1] ? style.unsure : ''}
        `}
      >
        m
      </span>
    </div>
  )
}

export default DurationInputDisplay