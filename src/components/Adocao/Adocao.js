import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adocao.css";

const AdocaoList = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/animal");
        console.log(response.data); // Verifique se a propriedade 'foto' está correta
        setAnimais(response.data);
      } catch (error) {
        console.log("Erro ao buscar animais ", error);
      }
    };

    fetchAnimais();
  }, []);

  return (
    <div className="animal-list">
      <h2>Lista de Animais Cadastrados</h2>
      <div className="animal-cards-container">
        {animais.map((animal) => {
          const imgUrl = `http://localhost:3002${animal.foto}`;
          console.log("URL da imagem:", imgUrl); // Verifique a URL da imagem

          return (
            <div className="animal-card" key={animal.id}>
              <img
                src={imgUrl} // A URL da imagem deve ser acessível
                alt={animal.nome}
                className="animal-foto"
              />
              <h3>{animal.nome}</h3>
              <p>Sexo: {animal.sexo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdocaoList;
