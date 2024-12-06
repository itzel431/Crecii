import React from "react";
import "./App.css"; // Importación del archivo de estilos

function App() {
  const handleStart = () => {
    alert("¡Bienvenido a Creci!");
  };

  return (
    <div className="container">
      <h1 className="title">Creci</h1>
      <p className="subtitle">(Tu acompañante en el arte de ser mamá)</p>
      <button className="start-button" onClick={handleStart}>
        Empezar →
      </button>
    </div>
  );
}

export default App;
