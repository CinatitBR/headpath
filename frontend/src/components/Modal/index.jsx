import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './style.css'

const Modal = ({ show, onClose, title, body }) => {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth

  const handlePropagation = (e) => {
    e.stopPropagation()
  }
  
  useEffect(() => {
    if (show === true) {
      document.body.style.overflowY = 'hidden'
      document.body.style.marginRight = `${scrollbarWidth}px`
    }

    return () => { 
      document.body.style.overflowY = 'visible'
      document.body.style.marginRight = '0px'
    }
  })

  if (!show) return null

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal" tabIndex="0" onClick={handlePropagation}>
        <div className="modal-header">
          <h3>{title}</h3>

          <button type="button" className="close-modal" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="modal-body">
          {body}
        </div>
      </div>
      
    </div>
  )


  // return (
  //   <div 
  //     className="modal-overlay" 
  //     onClick={onClose}
  //   >
  //     <div className="modal" id="modal" tabIndex="0" onClick={handlePropagation}>
  //       {children}
  //     </div>
  //   </div>
  // )
}

export default Modal