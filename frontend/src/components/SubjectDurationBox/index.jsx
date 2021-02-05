import style from './style.module.css'

const SubjectDurationBox = ({ duration }) => {
  return (
    <div className={style.subjectDurationBox}>
      {duration}
    </div>
  )
}

export default SubjectDurationBox