import style from './style.module.css'

const TextInput = ({ label, name, value, onChange, autoFocus=false, error }) => {
  return (
    <div className={style.TextInput}>
      <label>
        {label}
      
        <input 
          type="text"
          name={name}
          value={value} 
          onChange={onChange} 
          autoFocus={autoFocus}
        />  
      </label>

      <div className="error">
        {error &&
          error
        }
      </div>
    </div>
  )
}

export default TextInput