import db from '../services/db.js'

const findAll = async () => {
  const sql = 'SELECT * FROM `subject`'

  try {
    const [rows, fields] = await db.query(sql)

    return rows
  }
  catch (err) {
    throw new Error(err)
  }
}

const findOne = async ({ subject }) => {
  const sql = `
    SELECT * FROM subject
    WHERE subject = ?
  `

  try {
    const [rows, fields] = await db.query(sql, [subject])

    return rows.length > 0
  }
  catch (err) {
    throw new Error(err)
  }
}

const create = async ({ subject, duration }) => {
  const sql = `
    INSERT INTO subject (subject, duration)
    VALUES (?, ?)
  `

  try {
    await db.query(sql, [subject, duration])
  }
  catch (err) {
    throw new Error(err)
  }
}

const SubjectModel = { findAll, findOne, create }

export default SubjectModel