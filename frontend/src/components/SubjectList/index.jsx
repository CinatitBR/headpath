import Subject from '../Subject'

const SubjectList = ({ subjectItems, isLoading, error }) => {

  if (error) {
    return <div>{error}</div>
  }
  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="subjects">
      {
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