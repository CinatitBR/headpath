import express from 'express'

import SubjectController from './Controllers/SubjectController.js'
import ErrorController from './Controllers/ErrorController.js'

const app = express()

app.use(express.json())

app.get('/subjects', SubjectController.index)
app.get('/subjects/set-current-subject', SubjectController.setCurrentSubject)
app.post('/subjects/create', SubjectController.create)

app.use(ErrorController.index)

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`)
})