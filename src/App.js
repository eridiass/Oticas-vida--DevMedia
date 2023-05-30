import React from 'react';
import Topo from './componentes/Topo/';
import Conteudo from './componentes/Conteudo/';
import Rodape from './componentes/Rodape';
import './App.css';

export default function App () {
  return (
    <div>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}
