import React from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="bf">
      <div className="inputs">
        <h1 className="nome">Calculadora BF (Body Fat)</h1>
        <h1>Peso:</h1>
        <input placeholder={`Em KG`}/>
        <h1>Altura:</h1>
        <input placeholder={`Em Centímetros`}/>
        <h1>Idade:</h1>
        <input placeholder={`Em Anos`}/>
        <h1>Pescoço:</h1>
        <input placeholder={`Em Centímetros`}/>
        <h1>Cintura:</h1>
        <input placeholder={`Em Centímetros`}/>
        <h1>Quadril (Para ulheres):</h1>
        <input placeholder={`Em Centímetros`}/>
        <button>
          Calcular Para Mulheres
        </button>
        <button>
          Calcular Para Homens
        </button>
      </div>
    </div>
  );
}

export default App;
