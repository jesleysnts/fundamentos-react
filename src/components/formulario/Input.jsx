import React, { useState } from "react";


export default (props) => {
  const [valor, setValor] = useState ('Inicial')


  function quandoMudar(e) {
    setValor (e.target.value)
  }

  return (
    <div className="Imput">
     <h3>{valor}</h3>
    <div>

    </div>
      <input value= {valor} onChange={quandoMudar} />
      <input value={valor} readOnly />
      <input value={undefined} />
    </div>
  )

  }