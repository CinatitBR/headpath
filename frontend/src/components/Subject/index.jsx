import style from './style.module.css'

import SubjectDurationBox from '../SubjectDurationBox'

const Subject = ({ subject, duration }) => {
  return (
    <div className={style.subject}>
      {subject}

      <SubjectDurationBox duration={duration}/>
    </div>
  )
}

export default Subject
