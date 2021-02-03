const formatDuration = duration => {
  const date = new Date()
  const length = duration.length

  const hours = length === 3 ? duration[0] : 0
  const minutes = duration.slice(Math.max(length - 2, 0))
  const seconds = 0 

  date.setHours(hours, minutes, seconds)

  const timeString = date.toTimeString()
  const formatedDuration = timeString.split(' ')[0]

  return formatedDuration
}

export default formatDuration