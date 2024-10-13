import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Usuario from "./components/Usuario";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarioForm" element={<Usuario /> } />
        <Route path="/TermsOfUse" component={<TermsOfUse/>} />
        <Route path="/PrivacyPolicy" component={<PrivacyPolicy/>} />
        <Route path="/About" component={<About/>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
