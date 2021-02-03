const toSeconds = time => {
  let [h, m, s] = time.split(':')

  h = parseInt(h)
  m = parseInt(m)
  s = parseInt(s)

  const seconds = (h * 60 * 60) + (m * 60) + (s)

  return seconds
}

const formatTime = time => {
  let [h, m, s] = time.split(':')

  // Convert units to number
  h = parseInt(h)
  m = parseInt(m)
  s = parseInt(s)

  if (s > 59) {
    m += parseInt(s / 60)
    s = s % 60
  }
  if (m > 59) {
    h += parseInt(m / 60)
    m = m % 60
  }

  // Convert units to string
  h = h.toString().length > 1 ? 
    h.toString() : 
    '0' + h

  m = m.toString().length > 1 ? 
    m.toString() : 
    '0' + m

  s = s.toString().length > 1 ? 
    s.toString() : 
    '0' + s

  const formatedTime = `${h}:${m}:${s}`

  return formatedTime
}

const timeHelper = { toSeconds, formatTime }

export default timeHelper