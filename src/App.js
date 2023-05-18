import React from "react";
import { PortFolio } from "./Components/PortFolio/PortFolio";
import { Project } from "./Components/PortFolio/Project";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <div >


      <BrowserRouter>
        <Routes>
          <Route path="/Project" element={<Project />} />
          <Route exact path="/" element={< PortFolio />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
