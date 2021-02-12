import { useEffect } from 'react'

import style from './style.module.css'

const Snackbar = ({ message, delay, show, onCloseSnackbar }) => {
  
  useEffect(() => {
    if (show) {
      setTimeout(() => onCloseSnackbar(), delay)
    }
  }, [show, onCloseSnackbar, delay])

  if (!show) return null

  return (
    <div className={style.snackbar}>
      <p>{message}</p>

      <div className={style.progressBar}>
        <div 
          className={style.innerBar} 
          style={{animationDuration: `${delay}ms`}}>
        </div>
      </div>
    </div>
  )
}

export default Snackbar