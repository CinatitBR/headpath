const DurationDigit = ({ value, cursor }) => {
  return (
    <span 
      className={`
        digit 
        ${value ? '' : 'unsure'} 
        ${cursor ? 'cursor' : ''}
      `}
      tabIndex="0"
    >
      { value ? value : '0' }
    </span>
  )
}

export default DurationDigit