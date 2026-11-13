import style from './style.module.css'
import { data } from "../../data";

function Select({ schema, handleSchema }) {
  return (
    <>
      <select
        value={schema}
        onChange={(e) => handleSchema(e.target.value)}
        className={style.select}
      >
        {data.map((opcao) => {
          return (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
