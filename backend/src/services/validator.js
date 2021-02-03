import timeHelper from './timeHelper.js'

const subjectValidation = async ({ subject, SubjectModel }) => {
  if (typeof subject !== 'string') {
    return 'O nome da matéria é inválido'
  }

  if (subject.trim().length === 0) {
    return 'Por favor, digite o nome da matéria'
  }

  if (subject.length > 50) {
    return 'O nome da matéria pode ter no máximo 50 caracteres'
  }

  const subjectExists = await SubjectModel.findOne({ subject }) 

  if (subjectExists) {
    return 'Essa matéria já existe'
  }

  return null
}

const durationValidation = ({ duration }) => {
  if (duration.trim().length === 0) {
    return 'Por favor, digite a duração da matéria'
  }

  // Format: 'xx:xx:00'
  const format = /^\d{2}:\d{2}:00$/

  if (!format.test(duration)) {
    return 'A duração é inválida'
  }

  const minSeconds = 60 // 1 minute
  const maxSeconds = 21600 // 6 hours
  const durationSeconds = timeHelper.toSeconds(duration)

  // Duration must have at least 1 minute and at most 6 hours
  if (durationSeconds < minSeconds 
    || durationSeconds > maxSeconds
  ) {
    return 'A duração precisa ter no minimo 1 minuto e no máximo 6 horas'
  }

  return null
}

const validator = { 
  subject: subjectValidation, 
  duration: durationValidation
}

export default validator