import style from './style.module.css'

const TimerDisplay = ({ duration }) => {
  return (
    <div className={style.timerDisplay}>
      {duration}
    </div>
  )
}

export default TimerDisplay