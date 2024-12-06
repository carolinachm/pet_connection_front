import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Usuario from "./components/Usuario/Usuario";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import About from "./components/About/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";
import AnimalForm from "./components/Animal/Animal";
import AdocaoList from "./components/Adocao/Adocao";
import AbrigoList from "./components/Abrigos/Abrigos";
import CadastroAbrigo from "./components/Cadastro/CadastroAbrigo.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/About" element={<About />} />
        <Route path="/Animal" element={<AnimalForm />} />
        <Route path="/Adocao" element={<AdocaoList />} />
        <Route path="/Abrigos" element={<AbrigoList />} />
        <Route path="/Abrigo" element={<CadastroAbrigo />} />
        
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
