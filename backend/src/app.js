import express from 'express'
import cors from 'cors'
import router from './routes.js'

import ErrorController from './Controllers/ErrorController.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(ErrorController.index)

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`)
})