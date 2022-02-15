import React from "react"
import If from "./If"

export default props => {
  const usuario = props.usuario || {}
  return (
    <div>
      <If tets={usuario && usuario.nome}>
        Seja bem vindo { usuario.nome }!  
      </If> 
    </div>
  )
}