import './Contador.css'
import React, { Component } from "react";

class Contador extends Component  {
  //Definir estado dentro do componente baseado em classe, essa propriedade sera inicializada como um objeto
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  } // this.props.numeroInicial = inicializar o numero

 
  //Função para incrementar o meu contador
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  } //Por que o this dentro de umaa função errow esta realcionado com o contexto lexo (contexto em que a função foi escrita)

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    })
  }

  setPasso =  (evento) => {
    this.setState ({
      passo: +evento.target.value,
    })
  }

  render() {
    return (
    <div className='Contador'>
      <h2>Contador</h2>
     <h3>{this.state.numero}</h3>
      <div>
        <label htmlFor='passoInput'>Passo:</label>
        <input 
          id='passoInput' 
          type='number'
          value={this.state.passo} 
          onChange={this.setPasso}
          />
      </div>
     <button onClick={this.inc}>+</button>
     <button onClick={this.dec}>-</button>
    </div>
    )
  }
}

export default Contador

//Componente baseado em classe


// import React from "react";

// export default class Mega extends React.Component {
// //quando extende o componente no reac precisa usar o setState

//   state = {
//     numero: this.props.NumeroIni
//   }

//   inc = () => {
//     this.setState({
//       numero: this.state.numero + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Mega</h2>
//         <h3>{this.state.numero}</h3>
//         <button onClick={this.inc}>+</button>
//       </div>
//     )
// }
// }