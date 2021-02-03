import SubjectModel from '../Models/SubjectModel.js'

import validator from '../services/validator.js'
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

      const success = { 
        status: 'ok', 
        feedback: 'Matéria adicionada com sucesso!' 
      }

      const errors = {
        status: 'error',
        subject: null,
        duration: null
      }

      errors.subject = await validator.subject({ subject, SubjectModel })
      errors.duration = validator.duration({ duration })

      const errorsExist = (errors.subject || errors.duration)

      // If there is any error
      if (errorsExist) {
        return res
          .status(400)
          .json(errors)
      }

      // Formats duration so that minutes and seconds have 59 units at most
      const newDuration = timeHelper.formatTime(duration)

      // Creates subject
      await SubjectModel.create({ 
        subject: subject, 
        duration: newDuration 
      })

      return res
        .status(201)
        .json(success)
    }
    catch (err) { next(err) }
  }
}

export default SubjectController