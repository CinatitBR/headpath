import style from './style.module.css'

const CurrentSubject = () => {
  return (
    <div className={style.currentSubject}>
      <div className={style.subject}>Matemática</div>
      <p className={style.description}>Matéria atual</p>
    </div>
  )
}

export default CurrentSubject