import style from './style.module.css'

const CurrentSubject = ({ subject, timerState }) => {
  return (
    <div className={style.currentSubject}>
      <div className={style.subject}>
        <h3 
          className={timerState.finished ? style.lineThrough : ''}
        >
          {subject}
        </h3>
      </div>

      <span 
        className={`
          ${style.description} 
          ${timerState.finished ? style.lineThrough : ''}
        `}
      >
        Matéria atual
      </span>
    </div>
  )
}

export default CurrentSubject