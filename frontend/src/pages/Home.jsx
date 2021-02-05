import { useState, useEffect } from 'react'

import Header from '../components/Header'
import CurrentSubjectTimer from '../components/CurrentSubjectTimer'
import SubjectList from '../components/SubjectList'
import Modal from '../components/Modal'
import SubjectForm from '../components/SubjectForm'

import '../global.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [subjectItems, setSubjectItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getSubjects = async () => {
    const response = await fetch('/subjects')

    if (!response.ok) {
      setError('Houve um erro')
    }

    const subjectItems = await response.json()
    setSubjectItems(subjectItems)
    setIsLoading(false)
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubjectCreated = (newSubject) => {
    setSubjectItems([...subjectItems, newSubject])
  }

  useEffect(() => {
    getSubjects()
  }, [])

  return (
    <>
      <Header onModalOpen={handleModal} />

      <CurrentSubjectTimer />

      <div className="next-subjects">
        <h2>Próximas matérias</h2>

        <div style={{paddingLeft: '10px'}}>
          <SubjectList 
            subjectItems={subjectItems} 
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={handleModal}
        title="Adicionar matéria"
        body={
          <SubjectForm onSubjectCreated={handleSubjectCreated} />
        }
      />
    </>
  );
}

export default App