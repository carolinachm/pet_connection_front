import React, { useState } from "react";
import axios from "axios";
import "./CadastroAbrigo.css";
import { toast } from "react-toastify";

const AbrigoForm = () => {
  const [abrigo, setAbrigo] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    capacidade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbrigo({ ...abrigo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/Abrigos", abrigo);

      setAbrigo({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        capacidade: "",
        id_usuario: "",
      });

      toast.success("Abrigo cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar abrigo:", error);
      toast.error("Erro ao cadastrar o abrigo. Verifique os dados novamente.");
    }
  };

  return (
    <div className="form-wrapper-cadastro">
      <div className="form-container">
        <h2>Cadastrar Abrigo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Abrigo"
            value={abrigo.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={abrigo.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={abrigo.telefone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={abrigo.endereco}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="capacidade"
            placeholder="Capacidade (quantidade máxima de animais)"
            value={abrigo.capacidade}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="id_usuario"
            placeholder="ID do Usuário (opcional)"
            value={abrigo.id_usuario}
            onChange={handleChange}
          />

          <button type="submit" className="btn-custom">
            Cadastrar Abrigo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AbrigoForm;
