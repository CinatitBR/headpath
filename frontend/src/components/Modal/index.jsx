import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

const Modal = ({ isOpen, onClose, title, children }) => {
  const handlePropagation = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const { clientWidth } = document.body
    const { innerWidth } = window
    const scrollbarWidth = innerWidth - clientWidth

    const hideScrollbar = () => {
      document.body.style.overflowY = 'hidden'
      document.body.style.marginRight = `${scrollbarWidth}px`
    }

    const showScrollbar = () => {
      document.body.style.overflowY = 'visible'
      document.body.style.marginRight = '0px'
    }

    if (isOpen) hideScrollbar()

    return showScrollbar
  }, [isOpen])

  if (!isOpen) return null

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
          {children}
        </div>
      </div>

    </div>
  )
}

export default Modal