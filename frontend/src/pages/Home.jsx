import { useState, useEffect } from 'react'

import Header from '../components/Header'
import CurrentSubjectTimer from '../components/CurrentSubjectTimer'
import SubjectList from '../components/SubjectList'
import Modal from '../components/Modal'
import SubjectForm from '../components/SubjectForm'

import '../global.css'
import style from './Home.module.css'

const App = () => {
  const [subjectItems, setSubjectItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const currentSubject = subjectItems[0]
  const nextSubjects = subjectItems.slice(1)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubjectCreated = (newSubject) => {
    setSubjectItems([...subjectItems, newSubject])
  }

  const setCurrentSubject = () => {
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
      <div className={isModalOpen ? style.blur : ''}>
        <Header onModalOpen={handleModal} />

        <main>
          {currentSubject && 
            <CurrentSubjectTimer 
              currentSubject={currentSubject} 
              setCurrentSubject={setCurrentSubject}
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
        </main>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleModal}
        title="Adicionar matéria"
      >
        <SubjectForm onSubjectCreated={handleSubjectCreated} />
      </Modal>
    </>
  );
}

export default App