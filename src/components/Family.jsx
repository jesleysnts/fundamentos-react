import React, { cloneElement } from 'react'

export default props => {
  console.log(typeof props.children.map)
  return (
    <div>
      {
        props.children.map((child) => {
          return cloneElement(child, props);
        })
      } {/*Função chamada child que recebe cada um dos filhos, no return ele clona
      cada filho passando as propriedade para o pai para o elemento clonado
      (props é o elemento Family e children é os filhos*/}
      </div>
  )
}

//Aula: Componente com filho
// ctrl + / comenta uma linha de codigo automaticamente