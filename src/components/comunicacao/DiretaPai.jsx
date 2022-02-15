// Comunicação direta entre compontentes de pai para o filho

import React from "react";
import DiretaFilho from "./DiretaFilho";

export default pros => {
  return (
    <div>
      <DiretaFilho nome='Filho 1' idade={20} nerd={true}/>
    </div>
  )
}

// Estabelecemos a comunicação indireta, do componente pai eu passei uma função via pros
// para o componente DiretaFilho, o componente filho a partir de um evento (clique de botão) a gente chamou essa função passando as infomações para o componente pai