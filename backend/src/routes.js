import express from 'express'

import SubjectController from './Controllers/SubjectController.js'

const router = express.Router()

router.get('/subjects', SubjectController.index)
router.get('/subjects/set-current-subject', SubjectController.setCurrentSubject)
router.post('/subjects/create', SubjectController.create)

export default router