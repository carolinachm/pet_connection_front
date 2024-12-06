import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Abrigos_estilo.css";

const AbrigoList = () => {
  const [abrigos, setAbrigos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAbrigos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/abrigos");
        console.log("Dados recebidos da API:", response.data);
        setAbrigos(response.data);
      } catch (error) {
        console.error("Erro ao buscar abrigos: ", error);
      }
    };

    fetchAbrigos();
  }, []);

  const handleCadastroClick = () => {
    navigate("/abrigo"); // Navegar para a página de cadastro
  };

  return (
    <div className="abrigo-list">
      {/* Cabeçalho */}
      <header className="abrigo-header">
        <h2>Abrigos Cadastrados</h2>
        <button className="button" onClick={handleCadastroClick}>
          Cadastrar
        </button>
      </header>

      {/* Cartões de Abrigos */}
      <div className="abrigo-cards-container">
        {abrigos.map((abrigo) => {
          const imgUrl = `http://localhost:3000${abrigo.foto}`;
          return (
            <div className="abrigo-card" key={abrigo.id}>
              <img
                src={imgUrl}
                alt={abrigo.nome}
                className="abrigo-foto"
              />
              <div className="abrigo-info">
                <h3 className="abrigo-name">{abrigo.nome}</h3>
                <p>Localização: {abrigo.localizacao}</p>
                <p>Contato: {abrigo.contato}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AbrigoList;
