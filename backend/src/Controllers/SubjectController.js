import Subject from '../Models/Subject.js'

import timeHelper from '../services/timeHelper.js'

const SubjectController = {
  index: async (req, res, next) => {
    try {
      const subjects = await Subject.findAll()
  
      return res.json(subjects)
    }
    catch (err) { next(err) }
  },

  create: async (req, res, next) => {
    try {
      const { subject, duration } = req.body

      const success = { ok: 'Matéria adicionada com sucesso!' }
      const errors = {
        subject: null,
        duration: null
      }

      // Subject validation
      if (subject.trim().length === 0) {
        errors.subject = 'Por favor, digite o nome da matéria'
      }
      else if (subject.length > 50) {
        errors.subject = 'O nome da matéria pode ter no máximo 50 caracteres'
      }
      else {
        const subjectExists = await Subject.findOne({ subject })

        if (subjectExists) errors.subject = 'Essa matéria já existe'
      }

      // Duration validation
      const durationFormat = /^\d{2}:\d{2}:\d{2}$/

      const minSeconds = 60
      const maxSeconds = 21600
      const durationSeconds = timeHelper.toSeconds(duration)

      if (duration.trim().length === 0) {
        errors.duration = 'Por favor, digite a duração da matéria'
      }
      else if (!durationFormat.test(duration)) {
        errors.duration = 'A duração é inválida'
      }
      // Duration must have at least 1 minute and at most 6 hours
      else if (durationSeconds < minSeconds 
        || durationSeconds > maxSeconds
      ) {
        errors.duration = 'A duração precisa ter no minimo 1 minuto e no máximo 6 horas'
      }

      const errorsExist = errors.subject || errors.duration

      // If there is any error
      if (errorsExist) {
        return res
          .status(400)
          .json(errors)
      }

      // Formats duration so that minutes and seconds have 59 units at most
      const formatedDuration = timeHelper.formatTime(duration)

      // Create Subject
      await Subject.create({ subject: subject, duration: formatedDuration })

      return res
        .status(201)
        .json(success)
    }
    catch (err) { next(err) }
  }
}

export default SubjectController