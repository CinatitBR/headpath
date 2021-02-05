const toSeconds = time => {
  let [h, m, s] = time.split(':')

  h = parseInt(h)
  m = parseInt(m)
  s = parseInt(s)

  const seconds = (h * 60 * 60) + (m * 60) + (s)

  return seconds
}

const timeHelper = { toSeconds }

export default timeHelper