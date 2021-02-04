import Subject from '../Subject'

const SubjectList = ({ subjectItems, isLoading }) => {
  return (
    <div className="subjects">
      {
        isLoading ?
        <div>Carregando...</div> :

        subjectItems
          .map(({subject_id, subject, duration}) => 
            <Subject
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