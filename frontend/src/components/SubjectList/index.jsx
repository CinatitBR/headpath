import SubjectListItem from '../SubjectListItem'

import style from './style.module.css'

const SubjectList = ({ subjectItems, isLoading, error }) => {
  if (error) {
    return <div>{error}</div>
  }
  if (isLoading) {
    return <div>Carregando...</div>
  }
  
  return (
    <div className={style.subjectList}>
      {
        subjectItems
          .map(({subject_id, subject, duration}) => 
            <SubjectListItem
              key={subject_id}
              subject={subject}
              duration={duration}
            />
          )
      }
    </div>
  )
}

export default SubjectList