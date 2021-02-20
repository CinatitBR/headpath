import style from './style.module.css'

const Tooltip = () => {
  return (
    <div className={style.tooltip}>
      <header>
        <h3 className={style.title}>Intervalo</h3>
      </header>

      <div className={style.fields}>
        <div className={style.verticalField}>
          <label>
            Frequência

            <span>25m</span>
          </label>
        </div>

        <div className={style.verticalField}>
          <label>
            Duração

            <span>5m</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Tooltip