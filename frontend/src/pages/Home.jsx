import { useState } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import SubjectList from '../components/SubjectList'
import Modal from '../components/Modal'
import SubjectForm from '../components/SubjectForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Home.css'

const App = () => {
  const [subjects, setSubjects] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getSubjects = () => {
    
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Header onModalOpen={handleModal} />

      <Menu />

      <div className="next-subjects">
        <h2>Próximas matérias</h2>

        <SubjectList />
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