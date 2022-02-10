import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import Fragmento from './components/Fragmento'
import ComParametro from './components/ComParametro'
import Family from './components/Family'
import FamilyMember from './components/FamilyMember'


export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>
      <Card titulo='Aluno' color='#FFA07A'>
        <ComParametro
          titulo='Situação do Aluno'
          aluno='Pedro Silva'
          nota={9.5}
        />
      </Card>

      <Card titulo='Fragmento' color='#DDA0DD'>
        <Fragmento />
      </Card>


      <Card titulo='Primeiro' color='#8FBC8F'>
        <Primeiro></Primeiro>
      </Card>


      <Card titulo='Componentes com filhos' color='#9370DB'>
        <Family sobrenome='Ferreira'> 
          <FamilyMember nome='Dani' />
          <FamilyMember nome='Gus' />
          <FamilyMember nome='Jes' />
        </Family> {/*Elementos pai e filhos */}
      </Card>

  
</div>
</div>