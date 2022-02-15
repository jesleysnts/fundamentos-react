import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

  // const [name, setName] = useState('')
  const [a, b] = [1, 2]
  let [nome, setnome] = useState('?')
  let [idade, setidade] = useState(0)
  let [nerd, setnerd] = useState(false)

  function fornecerInformacoes (nome, idade, nerd) {
    setnome (nome)
    setidade (idade)
    setnerd (nerd)
  }

  // function handleName (e) {
  //   setName(e.target.value)
  // }

  return (
    <div>
      <div>
       <span>{nome}</span>
       <span>{idade}</span>
       <span>{nerd ? 'Verdadeiro' : 'Falso' }</span>
       {/* {name} */}
      </div> 
      {/* <input value={name} onChange={handleName} /> */}
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}