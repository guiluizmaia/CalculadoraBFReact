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
    peso = e.target.value;
  
    setPeso(peso);
}

const handleChangeAlt = (e) =>{  
  alt = e.target.value;

  setAlt(alt);
}

const handleChangeIda = (e) =>{  
  ida = e.target.value;

  setIda(ida);
}

const handleChangePesc = (e) =>{  
  pesc = e.target.value;

  setPesc(pesc);
}

const handleChangeCint = (e) =>{  
  cint = e.target.value;

  setCint(cint);
}

const handleChangeQuad = (e) =>{  
  quad = e.target.value;

  setQuad(quad);
}

  return (
    <div className="bf">
      <div className="inputs">
        <h1 className="nome">Calculadora BF (Body Fat)</h1>
        <h1>Peso:</h1>
        <input value={peso} placeholder={`Em KG`}/>
        <h1>Altura:</h1>
        <input value={alt} placeholder={`Em Centímetros`}/>
        <h1>Idade:</h1>
        <input value={ida} placeholder={`Em Anos`}/>
        <h1>Pescoço:</h1>
        <input value={pesc} placeholder={`Em Centímetros`}/>
        <h1>Cintura:</h1>
        <input value={cint} placeholder={`Em Centímetros`}/>
        <h1>Quadril (Para ulheres):</h1>
        <input value={quad} placeholder={`Em Centímetros`}/>
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
