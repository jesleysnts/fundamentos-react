import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
  return (
    <div>
      <FamiliaMembro nome='Dani' sobrenome='Souza' />
      <FamiliaMembro nome='Gus' sobrenome='Souza' />
      <FamiliaMembro nome='Jes' sobrenome='Souza' />
    </div>
  )
}