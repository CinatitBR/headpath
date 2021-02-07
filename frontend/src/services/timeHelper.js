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

const timeHelper = { formatFormDuration, fromTimeToMilliseconds }

export default timeHelper