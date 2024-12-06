import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adocao_estilo.css";

const AdocaoList = () => {
  const [animais, setAnimais] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/Animais");
        console.log(response.data);
        setAnimais(response.data);
      } catch (error) {
        console.error("Erro ao buscar animais: ", error);
      }
    };

    fetchAnimais();
  }, []);

  const handleCadastroClick = () => {
    navigate("/animal"); // Navegar para a página de cadastro
  };

  return (
    <div className="animal-list">
      {/* Cabeçalho */}
      <header className="animal-header">
        <h2>Animais Cadastrados</h2>
        <button className="button" onClick={handleCadastroClick}>
          Cadastrar
        </button>
      </header>

      {/* Cartões de Animais */}
      <div className="animal-cards-container">
        {animais.map((animal) => {
          const imgUrl = `http://localhost:3002${animal.foto}`;
          return (
            <div className="animal-card" key={animal.id}>
              <img
                src={imgUrl}
                alt={animal.nome}
                className="animal-foto"
              />
              <div className="animal-info">
                <h3 className="animal-name">{animal.nome}</h3>
                <p>Idade: {animal.idade} anos</p>
                <p>Sexo: {animal.sexo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdocaoList;

