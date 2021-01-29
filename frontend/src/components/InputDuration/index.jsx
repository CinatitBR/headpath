import './style.css'

const InputDuration = () => {
  
  return (
    <div className="input-duration">
      <div>
        <span className="digit selected">0</span>
        <span className="digit">0</span>
        <span className="symbol">h</span>

        <span className="digit">0</span>
        <span className="digit">0</span>
        <span className="symbol">m</span>
      </div>

      <input type="tel" />
    </div>
  )
}

export default InputDuration