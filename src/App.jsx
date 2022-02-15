import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/Basic/Primeiro'
import Fragmento from './components/Basic/Fragmento'
import ComParametro from './components/Basic/ComParametro'
import Family from './components/Basic/Family'
import FamilyMember from './components/Basic/FamilyMember'
import ListStudents from './components/Repetition/ListStudents'
import TabelaProdutos from './components/Repetition/TabelaProdutos'
import ParOuImpar from './components/Condicional/ParOuImpar'
import UsuarioInfo from './components/Condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contator/Contador'
import Mega from './components/mega/Mega'

export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>

    <Card titulo='Componente Controlado' color='#639E69'>
        <Input></Input>
      </Card>

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

      <Card titulo='Repetição' color='#F5F56F'>
       <ListStudents></ListStudents>
      </Card>

    <div className='TabelaProdutos'>
      <Card titulo='Repetição Desafio' color='#4682B4'>
       <TabelaProdutos></TabelaProdutos>
      </Card>

    <Card titulo='Renderização Condicional' color='#008080'>
       <ParOuImpar numero={25}></ParOuImpar>
       <UsuarioInfo usuario={{ nome:'Fernando' }} />
    </Card>

    <Card titulo='Comunicação Direta' color='#E6B978'>
      <DiretaPai></DiretaPai>
    </Card>

    <Card titulo='Comunicação Direta' color='#6C7C90'>
      <IndiretaPai></IndiretaPai>
    </Card>

    <Card titulo='Componente Controlado' color='#639E69'>
      <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo='Desafio Megasena' color='#856C90'>
        <Mega NumeroIni={10}></Mega>
      </Card>
      
    </div>
</div>
</div>