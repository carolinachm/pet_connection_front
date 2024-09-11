import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({ nome: '', email: '', senha: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNovoUsuario({ ...novoUsuario, [e.target.name]: e.target.value });
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, novoUsuario]); // Adiciona o novo usuário à lista
    setNovoUsuario({ nome: '', email: '', senha: '' }); // Limpa o formulário
    handleClose();
  };

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <ul className="nav">
        <li className="nav-item">
          <Link to="#" className="nav-link" onClick={handleShow}>#</Link>
        </li>
        <li className="nav-item">
          <Link to="#usuarios" className="nav-link">Lista de Usuários</Link>
        </li>
      </ul>


    </div>
  );
}

export default Dashboard;
