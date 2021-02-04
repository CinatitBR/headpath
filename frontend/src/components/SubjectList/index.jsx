import Subject from '../Subject'

const SubjectList = ({ subjectItems }) => {
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