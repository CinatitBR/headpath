import db from '../services/db.js'

const findAll = async () => {
  const sql = `
    SELECT * FROM subject
    ORDER BY position ASC
  `

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
    const [results, fields] = await db.query(sql, [subject, duration])
    const { insertId } = results

    const newSubject = { 
      subject_id: insertId, 
      subject, 
      duration 
    }

    return newSubject
  }
  catch (err) {
    throw new Error(err)
  }
}

const setCurrentSubject = async () => {
  let query = ``

  try {
    await db.query('START TRANSACTION')

    // Get smallest position value
    query = `
      SET @min_position = (SELECT MIN(position) FROM subject)
    `   

    await db.query(query)

    // Get biggest position value
    query = `
      SET @max_position = (SELECT MAX(position) FROM subject)
    `

    await db.query(query)

    // Get current subject id
    query = `
      SET @current_subject_id = (
        SELECT subject_id FROM subject 
        WHERE position =  @min_position
      )
    `

    await db.query(query)
  
    // Decrement positions by one 
    query = `
      UPDATE subject
      SET position = position - 1
    ` 

    await db.query(query)

    // Define previous current subject as last position
    query = `
      UPDATE subject
      SET position = @max_position + 1
      WHERE subject_id = @current_subject_id
    `

    await db.query(query)

    await db.query('COMMIT')
  }
  catch (err) {
    await db.query('ROLLBACK')

    throw new Error(err)
  }
}

const SubjectModel = { 
  findAll, 
  findOne, 
  create,
  setCurrentSubject
}

export default SubjectModel