import './IndiretaFilho.css'
import React from "react"

export default props => {
  const cb = props.quandoClicar
  const gerarIdade= () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 5.0
  return (
    <div className='IndiretaFilho'>
      <div>Filho</div>
      <button onClick={_ => cb('Pedro', gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  )
}