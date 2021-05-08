import style from './style.module.css'

const BreakMenu = () => {
  return (
    <section className={style.BreakMenu}>
      <form>
        <header>
          <h3 className={style.title}>Intervalo</h3>
        </header>

        <div className={style.fields}>

          <div className={style.field}>
            <label>
              Frequência

              <span>25m</span>
            </label>
          </div>

          <div className={style.field}>
            <label>
              Duração

              <span>5m</span>
            </label>
          </div>

        </div>

        <button type="button" className={style.editButton}>
          Edit
        </button>
      </form>
    </section>
  )
}

export default BreakMenu