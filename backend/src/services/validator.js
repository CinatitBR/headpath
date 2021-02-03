// import timeHelper from './timeHelper.js'

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

  const initialFormat = /^\d{2}:[0-5][0-9]:[0-5][0-9]$/

  if (!initialFormat.test(duration)) {
    return 'A duração é inválida' 
  }

  const seconds = parseInt(duration.split(':')[2])
  
  if (seconds !== 0) {
    return 'A duração não pode conter segundos'
  }

  // Duration must have at least 1 minute and at most 6 hours
  const finalFormat = /^0([0-5]:[0-5][1-9]|6:00):00$/

  if (!finalFormat.test(duration)) {
    return 'A duração precisa ter no minimo 1 minuto e no máximo 6 horas'
  }

  return null
}

const validator = { 
  subject: subjectValidation, 
  duration: durationValidation
}

export default validator