import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  const [peso, setPeso] = useState();
  const [alt, setAlt] = useState();
  const [ida, setIda] = useState();
  const [pesc, setPesc] = useState();
  const [cint, setCint] = useState();
  const [quad, setQuad] = useState();


  const handleChangePeso = (e) =>{  
    //peso = e.target.value;
  
    setPeso(e.target.value);
    
}

const handleChangeAlt = (e) =>{  
  //alt = e.target.value;

  setAlt(e.target.value);
}

const handleChangeIda = (e) =>{  
  //ida = e.target.value;

  setIda(e.target.value);
}

const handleChangePesc = (e) =>{  
  //pesc = e.target.value;

  setPesc(e.target.value);
}

const handleChangeCint = (e) =>{  
 // cint = e.target.value;

  setCint(e.target.value);
}

const handleChangeQuad = (e) =>{  
  //quad = e.target.value;

  setQuad(e.target.value);
}

/*
Para Homens:

% de gordura = 495/(1.0324-.19077(log(cintura-pescoço))+.15456(log(altura)))-450 (logaritmos em base 10)
Para Mulheres:

% de gordura = 495/(1.29579-.35004(log(cintura+quadril-pescoço))+.22100(log(altura)))-450 (logaritmos em base 10)
*/
const calcula = () =>{
  if(quad == null){
  const resul = 495/(1.0324-0.19077(Math.log10(cint-pesc))+0.15456(Math.log10(alt)))-450
  }else{
    const resul = 495/(1.0324-0.19077(Math.log10(cint+quad-pesc))+0.15456(Math.log10(alt)))-450

  }
  
}

  return (
    <div className="bf">
      <div className="inputs">
        <h1 className="nome">Calculadora BF (Body Fat)</h1>
        <h1>Peso:</h1>
        <input value={peso} placeholder={`Em KG`} onChange={(e) => handleChangePeso(e)}/>
        <h1>Altura:</h1>
        <input value={alt} placeholder={`Em Centímetros`} onChange={(e) => handleChangeAlt(e)}/>
        <h1>Idade:</h1>
        <input value={ida} placeholder={`Em Anos`} onChange={(e) => handleChangeIda(e)}/>
        <h1>Pescoço:</h1>
        <input value={pesc} placeholder={`Em Centímetros`} onChange={(e) => handleChangePesc(e)}/>
        <h1>Cintura:</h1>
        <input value={cint} placeholder={`Em Centímetros`} onChange={(e) => handleChangeCint(e)}/>
        <h1>Quadril (Para mulheres):</h1>
        <input value={quad} placeholder={`Em Centímetros`} onChange={(e) => handleChangeQuad(e)}/>
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
