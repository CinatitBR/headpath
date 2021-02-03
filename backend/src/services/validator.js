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

const validator = { subject: subjectValidation }

export default validator