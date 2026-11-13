import style from "./style.module.css";

function Intro() {
  return (
    <>
      <section className={style.intro}>
        <h1 style={{textAlign: "center"}}>The Color API</h1>
        <div style={{textAlign: "justify"}}>
          <h2>Contextualização!</h2>
          <p>Os formatos <strong>HEX</strong>, <strong>RGB</strong> e <strong>HSL</strong> são os padrões mais utilizados para definir cores em páginas web através de HTML e CSS. Cada um possui uma lógica própria de funcionamento:</p>
          <ul>
            <li><strong>HEX (Hexadecimal):</strong> Utiliza uma combinação de 6 caracteres alfanuméricos divididos em três pares (de 00 a FF). Eles representam a intensidade das cores primárias da luz, respectivamente: Vermelho (RR), Verde (GG) e Azul (BB). Exemplo: #FF0000 (vermelho puro).</li> <br />
            <li><strong>RGB (Red, Green, Blue):</strong> Baseia-se no sistema de luz aditiva das telas, combinando as três cores primárias em canais distintos. Cada canal recebe um valor numérico inteiro de 0 a 255. Exemplo: rgb(255, 0, 0).</li> <br />
            <li><strong>HSL (Hue, Saturation, Lightness):</strong> É considerado o modelo mais intuitivo para humanos, pois imita a forma como percebemos e escolhemos as cores no <a href="https://www.avmakers.com.br/blog/circulo-cromatico" target='_blank'>círculo cromático.</a>
            <ul>
              <li><strong>H — Matiz (Hue):</strong> A cor em si, representada em graus no círculo cromático de 0° a 360°. Referências: 0°/360° (vermelho), 120° (verde) e 240° (azul).</li>
              <li><strong>S — Saturação (Saturation):</strong> A pureza ou intensidade da cor, variando de 0% (cinza neutro) até 100% (a cor totalmente viva).</li>
              <li><strong>L — Luminosidade (Lightness):</strong> O quão clara ou escura a cor é, variando de 0% (preto absoluto) até 100% (branco absoluto). O valor de 50% representa a cor em sua tonalidade padrão.</li>
            </ul>
            </li>
          </ul>
          <h2>Como buscar?</h2>
          <ul>
              <li><strong>HEX:</strong> #0047AB ou 0047AB.</li>
              <li><strong>RGB:</strong> rgb(0, 71, 171) ou 0, 71, 171.</li>
              <li><strong>HSL:</strong> hsl(215, 100%, 34%) ou 215, 100%, 34%.</li>
          </ul>
          <p><small><em>Dica: Espaços após as vírgulas nos formatos RGB e HSL são aceitos.</em></small></p>
        </div>

      </section>
    </>
  );
}

export default Intro;
