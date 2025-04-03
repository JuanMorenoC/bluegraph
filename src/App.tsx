import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/appbar";
import Information from "./components/information";
import "./App.css";
import Analizador from "./components/analizador";
import Reportes from "./components/reportes";
import Donacion from "./components/donacion";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/analizador" element={<Analizador />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/" element={<Information />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
