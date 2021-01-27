import Subject from '../Models/Subject.js'

const SubjectController = {
  index: async (req, res) => {
    const subjects = await Subject.findAll()
  
    return res.json(subjects)
  },

  create: async (req, res, next) => {
    const { subject, duration } = req.body

    const subjectExists = await Subject.findOne({ subject })

    // Check if subject already exists
    if (subjectExists) {
      return res
        .status(400)
        .json({ error: 'Essa matéria já existe.' })
    }

    try {
      // Create Subject
      await Subject.create({ subject, duration })

      return res
        .status(201)
        .json({ success: 'Matéria adicionada com sucesso!'})
    }
    catch (err) {
      next(err)
    }
  }
}

export default SubjectController