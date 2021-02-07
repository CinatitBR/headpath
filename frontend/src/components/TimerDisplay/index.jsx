import style from './style.module.css'

const TimerDisplay = ({ time }) => {
  return (
    <div className={style.timerDisplay}>
      {time}
    </div>
  )
}

export default TimerDisplay