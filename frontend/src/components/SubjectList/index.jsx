import Subject from '../Subject'

const SubjectList = () => {
  return (
    <div className="subjects">
      <Subject subject="Física" duration="01:25:00" />

      <Subject subject="Português" duration="00:25:00" />

      <Subject subject="Química" duration="05:00:00" />

      <Subject subject="Inglês" duration="01:30:00" />
    </div>
  )
}

export default SubjectList