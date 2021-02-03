const subjectValidation = subject => {
  if (subject.trim() === '') {
    return 'Por favor, digite o nome da matéria'
  }

  if (subject.length > 50) {
    return 'O nome da matéria pode ter no máximo 50 caracteres'
  }

  return null
}

const durationValidation = duration => {
  if (duration.trim() === '') {
    return 'Por favor, digite a duração da matéria'
  }

  const format = /^\d{1,3}$/

  if (!format.test(duration)) {
    return 'A duração tem um formato inválido'
  }

  return null
}

const useValidator = () => {
  const validator = {
    subject: subjectValidation, 
    duration: durationValidation
  }
  
  return validator
}

export default useValidator