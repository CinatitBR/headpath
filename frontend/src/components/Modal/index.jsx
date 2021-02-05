import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

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
    <div className={style.modalOverlay} onClick={onClose}>

      <div className={style.modal} tabIndex="0" onClick={handlePropagation}>
        <div className={style.modalHeader}>
          <h3>{title}</h3>

          <button type="button" className={style.closeModalIcon} onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className={style.modalBody}>
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