import Subject from '../Models/Subject.js'

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

      const success = { success: 'Matéria adicionada com sucesso!' }
      const errors = {
        subject: []
      }

      const subjectExists = await Subject.findOne({ subject })

      // Check if subject already exists
      if (subjectExists) {
        errors.subject.push('Essa matéria já existe.')
      }

      // If there is any error
      if (errors.subject.length > 0) {
        return res
          .status(400)
          .json(errors)
      }

      // Create Subject
      await Subject.create({ subject, duration })

      return res
        .status(201)
        .json(success)
    }
    catch (err) { next(err) }
  }
}

export default SubjectController