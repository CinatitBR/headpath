import SubjectDurationBox from '../SubjectDurationBox'

import style from './style.module.css'

const SubjectListItem = ({ subject, duration }) => {
  return (
    <div className={style.subjectListItem}>
      {subject}

      <SubjectDurationBox duration={duration}/>
    </div>
  )
}

export default SubjectListItem
