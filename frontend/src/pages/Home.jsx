import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import SubjectList from '../components/SubjectList'
import Modal from '../components/Modal'
import SubjectForm from '../components/SubjectForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Home.css'

const App = () => {
  const [subjectItems, setSubjectItems] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getSubjects = async () => {
    const response = await fetch('/subjects')
    const subjectItems = await response.json()

    setSubjectItems(subjectItems)
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    getSubjects()
  }, [])

  return (
    <>
      <Header onModalOpen={handleModal} />

      <Menu />

      <div className="next-subjects">
        <h2>Próximas matérias</h2>

        <SubjectList 
          subjectItems={subjectItems} 
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
          <SubjectForm />
        </div>
      </Modal>
    </>
  );
}

export default App