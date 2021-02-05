import { useState, useEffect } from 'react'

import Header from '../components/Header'
import CurrentSubjectTimer from '../components/CurrentSubjectTimer'
import SubjectList from '../components/SubjectList'
import Modal from '../components/Modal'
import SubjectForm from '../components/SubjectForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Home.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [subjectItems, setSubjectItems] = useState([])
  const [showModal, setShowModal] = useState(false)

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
    setShowModal(!showModal)
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

        <SubjectList 
          subjectItems={subjectItems} 
          isLoading={isLoading}
          error={error}
        />
      </div>
    
      <Modal show={showModal} onClose={handleModal}>
        <div className="modal-header">
          <h3>Adicionar matéria</h3>

          <button type="button" className="close-modal" onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="modal-body">
          <SubjectForm 
            onSubjectCreated={handleSubjectCreated} 
          />
        </div>
      </Modal>
    </>
  );
}

export default App