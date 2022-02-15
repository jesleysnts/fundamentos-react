import './TabelaProdutos.css'
import React from "react";
import '../../Data/produtos'
import produtos from "../../Data/produtos";

export default (props) => {

  const prod = produtos.map((pro, i) => {
    return (
    <tr className={i % 2 == 0 ? 'Par': 'Impar'}>
    {/* i modulo 2 */}
      <td>{pro.id}</td>
      <td>{pro.nome}</td>
      <td>{pro.preco}</td>
   </tr> 
  )})

 

  return (
    <div>
      <table border='1'>
        <thead>

        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
          
        </tr>
        </thead>

        <tbody>

        </tbody>
          {prod}
      </table>
    </div>
  )
}

// === valor e tipo
// == valor