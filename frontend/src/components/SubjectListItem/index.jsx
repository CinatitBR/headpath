import style from './style.module.css'

import SubjectDurationBox from '../SubjectDurationBox'

const SubjectListItem = ({ subject, duration }) => {
  return (
    <div className={style.subjectListItem}>
      {subject}

      <SubjectDurationBox duration={duration}/>
    </div>
  )
}

export default SubjectListItem
