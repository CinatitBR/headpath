import { useState, useEffect } from 'react'

import Header from '../components/Header'
import TimerWrapper from '../components/TimerWrapper'
import SubjectList from '../components/SubjectList'
import Modal from '../components/Modal'
import SubjectForm from '../components/SubjectForm'
import Snackbar from '../components/Snackbar'

import '../global.css'
import style from './Home.module.css'

const App = () => {
  const [subjectItems, setSubjectItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [durationProgress, setDurationProgress] = useState(0)

  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarDelay, setSnackbarDelay] = useState(0)
  const [snackbarMessage, setSnackbarMessage] = useState(null)

  const currentSubject = subjectItems[0]
  const nextSubjects = subjectItems.slice(1)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubjectCreated = (newSubject) => {
    setSubjectItems([...subjectItems, newSubject])
  }

  const handleCallSnackbar = ({message, delay }) => {
    setShowSnackbar(true)
    setSnackbarDelay(delay)
    setSnackbarMessage(message)
  }

  const setCurrentSubject = async () => {
    const response = await fetch('/subjects/set-current-subject')

    if (!response.ok) {
      alert('Houve um erro! Por favor, tente novamente')
      return
    }

    const newSubjectItems = [...subjectItems] 
    newSubjectItems.push(newSubjectItems.shift())

    setSubjectItems(newSubjectItems)
  }

  useEffect(() => {
    const getSubjects = async () => {
      const response = await fetch('/subjects')
  
      if (!response.ok) {
        setError('Houve um erro')
      }
  
      const subjectItems = await response.json()
      setSubjectItems(subjectItems)
      setIsLoading(false)
    }

    getSubjects()
  }, [])

  return (
    <>
      <div 
        className={`
          ${style.wrapper} 
          ${isModalOpen ? style.blur : ''}
        `}
      >
        <Header onModalOpen={handleModal} durationProgress={durationProgress} />

        <main>
          {currentSubject && 
            <TimerWrapper 
              currentSubject={currentSubject} 
              setCurrentSubject={setCurrentSubject}
              onCallSnackbar={handleCallSnackbar}
            />
          }

          <section className={style.nextSubjects}>
            <header><h2>Próximas matérias</h2></header>

            <div style={{paddingLeft: '10px'}}>
              <SubjectList 
                subjectItems={nextSubjects} 
                isLoading={isLoading}
                error={error}
              />
            </div>
          </section>

          <Snackbar 
            message={snackbarMessage} 
            delay={snackbarDelay}
            show={showSnackbar}
            onCloseSnackbar={() => setShowSnackbar(false)}
          />
        </main>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleModal}
        title="Adicionar matéria"
      >
        <SubjectForm 
          onSubjectCreated={handleSubjectCreated} 
        />
      </Modal>
    </>
  );
}

export default App