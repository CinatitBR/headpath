import style from './style.module.css'

const TimerDisplay = ({ time, isTimerRunning }) => {
  return (
    <div 
    className={`
      ${style.timerDisplay} 
      ${isTimerRunning === true ? style.running : ''}
      ${isTimerRunning === false ? style.stopped : ''}
    `}
    >
      {time}
    </div>
  )
}

export default TimerDisplay