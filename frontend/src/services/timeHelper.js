const formatFormDuration = duration => {
  // duration format: hmm

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

const fromTimeToMilliseconds = time => {
  // time format: hh:mm:ss

  const [h, m, s] = time.split(':')

  const milliseconds = 
    (+h * 60 * 60 * 1000) 
    + (+m * 60 * 1000) 
    + (+s * 1000)

  return milliseconds
}

const fromMillisecondsToTime = milliseconds => {
  // Calculate time units
  let seconds = Math.floor(milliseconds / 1000)

  let minutes = Math.floor(seconds / 60)
  seconds = seconds % 60

  let hours = Math.floor(minutes / 60)
  minutes = minutes % 60

  // Format to time
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (hours < 10) {
    hours = '0' + hours
  } 

  const time = `${hours}:${minutes}:${seconds}`

  return time
}

const timeHelper = { 
  formatFormDuration, 
  fromTimeToMilliseconds,
  fromMillisecondsToTime 
}

export default timeHelper