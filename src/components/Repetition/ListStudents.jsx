import React from 'react'
import students from '../../Data/students'

export default (prop) => {
  
  const li1 = (
    <li>
     {students[0].id} {students[0].nome} {'->'} {students[0].nota}
    </li>
  );

  const lis = students.map((aluno) => {
    return (
    <li>
      {aluno.id} {aluno.nome} {'->'} {aluno.nota}
   </li> 
  )})

    return (
      <div>
        <ul style={{ listStyle: 'none '}}> {lis}</ul>
      </div>
  )
}

// Na pasta de dados criar um arquivo chamado Produtos.jsx, o produto avi ter 3 atributos, o ID, nome e preço.
// Na pasta repetição, criar um arquivo Tabelaprodutos.jsx e dentro dela criar uma tabela

