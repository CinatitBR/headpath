import { useEffect } from 'react'

const Modal = ({ show, onClose, children }) => {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth

  function handlePropagation(e) {
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
    <div 
      className="modal-overlay" 
      // style={{display: show ? 'block' : 'none'}}
      onClick={onClose}
    >
      <div className="modal" onClick={handlePropagation}>
        {children}
      </div>
    </div>
  )
}

export default Modal