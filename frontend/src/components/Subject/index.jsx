export default function Subject({ subject, duration }) {
  return (
    <div className="subject">
      {subject}
      <div className="duration">{duration}</div>
    </div>
  )
}
