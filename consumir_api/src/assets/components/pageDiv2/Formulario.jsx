import style from './style.module.css'

function Formulario({ buscarCor, formato, setFormato, children }) {
  return (
    <>
      <form onSubmit={buscarCor} className={style.formulario}>
        <label>
          <input
            type="text"
            value={formato}
            onChange={(e) => setFormato(e.target.value)}
            placeholder="Digite uma cor (HEX, RGB ou HSL)"
          />
        </label>
        <button type="submit">Buscar</button>
        {/* Select */}
        {children} 
      </form>
    </>
  );
}

export default Formulario;
