import style from './style.module.css'

const TimerDisplay = ({ time, isTimerRunning }) => {
  return (
    <div className={`${style.timerDisplay} ${isTimerRunning ? style.running : ''}`}>
      {time}
    </div>
  )
}

export default TimerDisplay