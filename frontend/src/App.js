import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Diario from "./pages/Diario";
import Momentos from "./pages/Momentos";
import Salud from "./pages/Salud";
import Lactancia from "./pages/Lactancia";
import Crecimiento from "./pages/Crecimiento";
import WhatsApp from "./pages/WhatsApp";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Creci</h1>
          <p>Tu acompañante en el arte de ser mamá</p>
        </header>
        <nav className="nav">
          <Link to="/diario">Diario</Link>
          <Link to="/momentos">Momentos</Link>
          <Link to="/salud">Salud</Link>
          <Link to="/lactancia">Lactancia</Link>
          <Link to="/crecimiento">Crecimiento</Link>
          <Link to="/whatsapp">WhatsApp</Link>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/diario" element={<Diario />} />
            <Route path="/momentos" element={<Momentos />} />
            <Route path="/salud" element={<Salud />} />
            <Route path="/lactancia" element={<Lactancia />} />
            <Route path="/crecimiento" element={<Crecimiento />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
