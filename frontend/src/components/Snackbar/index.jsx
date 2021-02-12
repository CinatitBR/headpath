import { useEffect } from 'react'

import style from './style.module.css'

const Snackbar = ({ message, show, onCloseSnackbar }) => {
  
  useEffect(() => {
    if (show) {
      setTimeout(() => onCloseSnackbar(), 2000)
    }
  }, [show, onCloseSnackbar])

  if (!show) return null

  return (
    <div className={style.snackbar}>
      <p>{message}</p>

      <div className={style.progressBar}>
        <div className={style.innerBar}></div>
      </div>
    </div>
  )
}

export default Snackbar