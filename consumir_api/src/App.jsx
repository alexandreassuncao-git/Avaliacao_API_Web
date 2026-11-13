import { useState } from "react"
import Intro from "./assets/components/pageDiv1/Intro"
import PageDiv1 from "./assets/components/pageDiv1/PageDiv1"
import PageDiv2 from "./assets/components/pageDiv2/PageDiv2"
import Feedback from './assets/components/pageDiv2/Feedback'
import Formulario from "./assets/components/pageDiv2/Formulario"
import Select from "./assets/components/pageDiv2/Select"
import Container from "./assets/components/pageDiv2/Container"
import Default from "./assets/components/pageDiv2/Default"
import Schema from "./assets/components/pageDiv2/Schema"
import Footer from './assets/components/pageDiv1/Footer'

function App() {
  const [status, setStatus] = useState('esperando'); // gerencia as renderizações 
  const [formato, setFormato] = useState('') // guarda o valor do input
  const [feedback, setFeedback] = useState('Busque alguma cor ou esquema.') // guarda a mensagem de feedback
  const [schema, setSchema] = useState('default') // guarda o valor do select + condição de renderização
  const [dadosCor, setdadosCor] = useState(null) // guarda o objeto/lista da(s) cor(es)

  function identificarFormato(formato_edit) {
    const limpo = formato_edit.trim()

    // Expressões Regulares (regex)

    // 1. HEX (#RGB ou #RRGGBB)
    const regex_hex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    if (regex_hex.test(limpo)) {
      const hexLimpo = limpo.startsWith("#") ? limpo.substring(1) : limpo
      return { chave: "hex", valor: hexLimpo }
    }

    // 2. RGB: aceita 'rgb(r, g, b)', 'r, g, b', 'r,g,b' ou 'r g b' (0 a 255)
    const match_rgb = limpo.match(
      /^(?:rgb\s*\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*\)|(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3}))$/i
    )

    // Operador de Coalescência Nula (??)

    if (match_rgb) {
      const r = Number(match_rgb[1] ?? match_rgb[4])
      const g = Number(match_rgb[2] ?? match_rgb[5])
      const b = Number(match_rgb[3] ?? match_rgb[6])

      if (r <= 255 && g <= 255 && b <= 255) {
        return { chave: "rgb", valor: `${r},${g},${b}` }
      }
    }

    // 3. HSL: aceita 'hsl(h, s%, l%)' ou 'h, s%, l%' (h: 0-360, s/l: 0-100%)
    const match_hsl = limpo.match(
      /^(?:hsl\s*\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})%\s*(?:,\s*|\s+)(\d{1,3})%\s*\)|(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})%\s*(?:,\s*|\s+)(\d{1,3})%)$/i
    )
    if (match_hsl) {
      const h = Number(match_hsl[1] ?? match_hsl[4])
      const s = Number(match_hsl[2] ?? match_hsl[5])
      const l = Number(match_hsl[3] ?? match_hsl[6])

      if (h <= 360 && s <= 100 && l <= 100) {
        return { chave: "hsl", valor: `${h},${s}%,${l}%` }
      }
    }

    return null
  }

  function handleSchema(novoSchema) {
    setSchema(novoSchema);
    setStatus('esperando'); 
    setdadosCor(null); 
    setFeedback('Busque uma cor/schema.');
  }

  async function buscarCor(e) {
    e.preventDefault();
    setStatus('carregando')
    setdadosCor(null) 

    const formato_edit = formato.trim()
    const resultado_formato = identificarFormato(formato_edit)

    if (!resultado_formato) { 
      setFeedback('Formato de cor inválido!')
      setStatus('erro')
      return;
    }

    try{
      const { chave, valor } = resultado_formato
      const endpoint =
        schema == "default"
          ? "https://www.thecolorapi.com/id?"
          : "https://www.thecolorapi.com/scheme?"

      // Construtor URL do JS
      const url = new URL(endpoint);
      // Inclusão de parâmetros de consulta
      url.searchParams.append(chave, valor)
      
      if (schema !== "default") {
        url.searchParams.append("mode", schema)

        switch (schema) {
          case "monochrome": url.searchParams.append("count", 5); break
          case "analogic": url.searchParams.append("count", 3); break
          case "complement": url.searchParams.append("count", 2); break
          case "triad": url.searchParams.append("count", 3); break
          case "quad": url.searchParams.append("count", 4); break
        }

      url.searchParams.append("format", "json")
      }
        const resp = await fetch(url)
        const dados = await resp.json()

        if (!resp.ok || dados.error){ 
          setFeedback('Cor/Schema não encontrado!')
          setStatus('erro')
          return;
        }

        setdadosCor(dados)
        setStatus('sucesso')
        
    }catch{
      setStatus('erro')
      setFeedback('Erro de conexão ou de servidor!')
    }
  }

  return(
    <>
      <PageDiv1>
        <Intro></Intro>
        <PageDiv2>
          {/* Desestruturação de props */}
          <Formulario buscarCor={buscarCor} formato={formato} setFormato={setFormato}>
            <Select schema={schema} handleSchema={handleSchema}></Select>
          </Formulario>
            <Container>
              {status === 'esperando' ? <Feedback feedback={feedback}></Feedback> :
                status === 'carregando' ? <p style={{fontWeight: '700', fontSize: '0.98rem', color: 'black'}}>Carregando...</p> : 
                  status === 'erro' ? <Feedback feedback={feedback}></Feedback> : 
                      schema === 'default' ? <Default dadosCor={dadosCor}></Default> : <Schema dadosCor={dadosCor}></Schema>
              }
            </Container>
        </PageDiv2>
        <Footer></Footer>
      </PageDiv1>
    </>
  )
}

export default App;