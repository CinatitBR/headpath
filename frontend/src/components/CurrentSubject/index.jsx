import style from './style.module.css'

const CurrentSubject = ({ subject }) => {
  return (
    <div className={style.currentSubject}>
      <div className={style.subject}>{subject}</div>
      <p className={style.description}>Matéria atual</p>
    </div>
  )
}

export default CurrentSubject