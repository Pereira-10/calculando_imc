import React from 'react';
import './style.css'; 

const App = ({ imcValue, idade }) => {

  function getClassificacao(imc) {
    if (idade >= 60) {
      if (imc < 22) {
        return 'Baixo Peso';
      } else if (imc >= 22 && imc < 27) {
        return 'Peso Adequado';
      } else {
        return 'Sobrepeso';
      }
    } else {
      if (imc < 18.5) {
        return 'Baixo Peso';
      } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
      } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
      } else {
        return 'Obesidade';
      }
    }
  }

  function getDescricao(idade) {
    if (idade >= 60) {
      return 'Para idosos (idade igual ou superior a 60 anos), a classificação é:';
    } else {
      return 'Para adultos (idade abaixo de 60 anos), a classificação é:';
    }
  }

  return (
    <div className="app-container">
      {imcValue !== null && <h2>Valor do IMC: {imcValue.toFixed(1)}</h2>}<br />
      {imcValue !== null && <p className="info">{getDescricao(idade)}</p>}
      {imcValue !== null && <p className="info"><strong>Classificação:</strong> {getClassificacao(imcValue)}</p>}
    </div>
  );
};

export default App;
