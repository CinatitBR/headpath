import Subject from '../Subject'

const SubjectList = ({ subjectItems }) => {
  const subjectList = subjectItems
    .map(({subject_id, subject, duration}) => (
      <Subject
        key={subject_id}
        subject={subject}
        duration={duration}
      />
    ))

  return (
    <div className="subjects">
      {
        subjectList
      }
    </div>
  )
}

export default SubjectList