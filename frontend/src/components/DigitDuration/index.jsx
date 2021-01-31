import './style.css'

const DigitDuration = ({ value }) => {

  return (
    <span 
      className={`digit`} 
      tabIndex="0"
    >
      { value }
    </span>
  )
}

export default DigitDuration