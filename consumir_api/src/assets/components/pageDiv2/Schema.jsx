import { useState } from 'react';
import style from './style.module.css';

function SchemaCard({ cor }) {
  const [copiado, setCopiado] = useState(false);

  function copiarHex() {
    if (!cor?.hex?.value) return;
    navigator.clipboard.writeText(cor.hex.value);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  }

  return (
    <li
      onClick={copiarHex}
      title="Clique para copiar o código HEX"
      style={{
        backgroundColor: cor.hex?.value,
        color: cor.contrast?.value,
      }}
      className={`${style.div} ${style.cardInterativo}`}
    >
      <div className={style.cardHeader}>
        <span className={style.nomeCor}>{cor.name?.value}</span>
        <span className={style.badgeCopia}>
          {copiado ? "✓ Copiado!" : "Copiar"}
        </span>
      </div>
      <span className={style.codigoLinha}>{cor.hex?.value}</span>
      <span className={style.codigoLinha}>{cor.rgb?.value}</span>
      <span className={style.codigoLinha}>{cor.hsl?.value}</span>
    </li>
  );
}

function Schema({ dadosCor }) {
  return (
    <>
      <ul
        style={{ listStyle: "none", padding: "0rem" }}
        className={style.schema}
      >
        {dadosCor?.colors?.map((cor, index) => {
          return (
            <SchemaCard
              key={`${cor.hex?.value || 'cor'}-${index}`}
              cor={cor}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Schema;
