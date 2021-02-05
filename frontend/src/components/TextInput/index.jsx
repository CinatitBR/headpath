import style from './style.module.css'

const TextInput = ({ label, name, value, onChange, autoFocus=false }) => {
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
    </div>
  )
}

export default TextInput