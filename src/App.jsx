import React from "react";
import Sidebar from "./components/Sidebar";
import DashBoard from "./components/DashBoard";
import Cards from "./components/Cards";
import Demoo from "./components/Demoo";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser/>} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/demo" element={<Demoo />} />
          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
