import React from "react";
import Sidebar from "./components/Sidebar";
import DashBoard from "./components/DashBoard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards";
import Demoo from "./components/Demoo";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/demo" element={<Demoo />} />
          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
