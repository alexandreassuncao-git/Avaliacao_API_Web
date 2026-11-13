import { useState } from 'react';
import style from './style.module.css';

function Default({ dadosCor }) {
  const [copiado, setCopiado] = useState(false);

  function copiarHex() {
    // Encadeamento Opcional (?)
    if (!dadosCor?.hex?.value) return;
    // Método nativo da API ClipBoard dos navegadores modernos
    navigator.clipboard.writeText(dadosCor.hex.value);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  }

  return (
    <>
      <div
        onClick={copiarHex}
        title="Clique para copiar o código HEX"
        style={{
          backgroundColor: dadosCor?.hex?.value,
          color: dadosCor?.contrast?.value,
        }}
        className={`${style.div} ${style.defaultColor} ${style.cardInterativo}`}
      >
        <div className={style.cardHeader}>
          <span className={style.nomeCor}>{dadosCor?.name?.value}</span>
          <span className={style.badgeCopia}>
            {copiado ? "✓ Copiado!" : "Copiar"}
          </span>
        </div>
        <span className={style.codigoLinha}>{dadosCor?.hex?.value}</span>
        <span className={style.codigoLinha}>{dadosCor?.rgb?.value}</span>
        <span className={style.codigoLinha}>{dadosCor?.hsl?.value}</span>
      </div>
    </>
  );
}

export default Default;
