import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import Fragmento from './components/Fragmento'
import ComParametro from './components/ComParametro'
import FamiliaMembro from './components/FamiliaMembro'


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
        <FamiliaMembro></FamiliaMembro>
      </Card>
    </div>

  </div >

//Como passar um parametro como componente