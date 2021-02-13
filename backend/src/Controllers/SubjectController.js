import SubjectModel from '../Models/SubjectModel.js'

import validator from '../services/validator.js'

const index = async (req, res, next) => {
  try {
    const subjects = await SubjectModel.findAll()

    return res.json(subjects)
  }
  catch (err) { next(err) }
}

const create = async (req, res, next) => {
  try {
    const { subject, duration } = req.body

    const success = { 
      status: 'ok', 
      newSubject: {} 
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

    // Creates subject
    const newSubject = await SubjectModel.create({ 
      subject, 
      duration
    })
    success.newSubject = newSubject

    return res
      .status(201)
      .json(success)
  }
  catch (err) { next(err) }
}

const setCurrentSubject = async (req, res, next) => {
  try {
    await SubjectModel.setCurrentSubject()

    return res
      .status(200)
      .json({ status: 'ok' })
  }
  catch (err) { next(err) }
}

const SubjectController = { 
  index, 
  create,
  setCurrentSubject
}

export default SubjectController