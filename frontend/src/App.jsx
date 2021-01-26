import { useState } from 'react'

import Header from './components/Header/'
import Menu from './components/Menu/'
import SubjectList from './components/SubjectList/'
import Modal from './components/Modal/'
import FormAddSubject from './components/FormAddSubject/'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  function handleModal() {
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
        <button type="button" className="close-modal" onClick={handleModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="modal-header">
          <h3>Adicionar matéria</h3>
        </div>

        <div className="modal-body">
          <FormAddSubject />
        </div>
      </Modal>
    </>
  );
}

export default App;