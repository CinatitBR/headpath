import style from './style.module.css'

const FieldError = ({ error }) => {
  return (
    <div className={style.FieldError}>
      {error && error}
    </div>
  )
}

export default FieldError