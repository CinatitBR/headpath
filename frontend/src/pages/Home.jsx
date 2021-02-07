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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubjectCreated = (newSubject) => {
    setSubjectItems([...subjectItems, newSubject])
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
      <Header onModalOpen={handleModal} />

      {currentSubject && 
        <CurrentSubjectTimer currentSubject={currentSubject} />
      }

      <section className={style.nextSubjects}>
        <h2>Próximas matérias</h2>

        <div style={{paddingLeft: '10px'}}>
          <SubjectList 
            subjectItems={subjectItems} 
            isLoading={isLoading}
            error={error}
          />
        </div>
      </section>

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