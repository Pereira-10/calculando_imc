import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { calcularIMC } from './teste';
import './style.css';

function Main() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [imc, setIMC] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (peso && altura && idade) {
      const calculatedIMC = calcularIMC(parseFloat(peso), parseFloat(altura));
      setIMC(calculatedIMC);
    }
  };

  return (
    <div className="main-container">
      <h1>Calculadora de IMC</h1> <br />
      <p>
        Aqui vamos calcular o seu IMC. <br />
        Por favor, insira o seu peso, altura e idade no formulário abaixo para descobrir seu Índice de Massa Corporal.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Peso (kg):
          <input className="input" type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <br />
        <label className="label">
          Altura (m):
          <input className="input" type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
        <br />
        <label className="label">
          Idade:
          <input className="input" type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </label>
        <br />
        <button className="button" type="submit">Calcular IMC</button>
      </form>
      <App imcValue={imc} idade={idade} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
