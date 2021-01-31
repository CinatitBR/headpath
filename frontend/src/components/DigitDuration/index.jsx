const DigitDuration = ({ value }) => {
  return (
    <span 
      className={`
        digit 
        ${!value && 'unsure'}
      `} 
      tabIndex="0"
    >
      { value ? value : '0' }
    </span>
  )
}

export default DigitDuration