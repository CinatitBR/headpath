import style from './style.module.css'

const Subject = ({ subject, duration }) => {
  return (
    <div className={style.subject}>
      {subject}

      <div className={style.duration}>{duration}</div>
    </div>
  )
}

export default Subject
