import React, { useState } from "react";
import axios from "axios";
import "./Animal.css";

const AnimalForm = () => {
  const [animal, setAnimal] = useState({
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    sexo: "",
    tamanho: "",
    cor: "",
    caracteristicas: "",
    status: "",
    data_entrada: "",
    foto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/animal",
        animal
      );
      console.log(response);

      // Resetando o formulário após a submissão
      setAnimal({
        nome: "",
        especie: "",
        raca: "",
        idade: "",
        sexo: "",
        tamanho: "",
        cor: "",
        caracteristicas: "",
        status: "",
        data_entrada: "",
        foto: "",
      });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="animal-form-wrapper">
      <div className="animal-cadastro">
        <h2>Cadastrar Animal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={animal.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="especie"
            placeholder="Espécie"
            value={animal.especie}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="raca"
            placeholder="Raça"
            value={animal.raca}
            onChange={handleChange}
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={animal.idade}
            onChange={handleChange}
          />
          
          <div>
            <p>Sexo?</p>
            <label>
              <input
                type="radio"
                name="sexo"
                value="macho"
                checked={animal.sexo === "macho"}
                onChange={handleChange}
              />
              Macho
            </label>
            <label>
              <input
                type="radio"
                name="sexo"
                value="femea"
                checked={animal.sexo === "femea"}
                onChange={handleChange}
              />
              Fêmea
            </label>
          </div>

          <div>
            <p>Tamanho?</p>
            <label>
              <input
                type="radio"
                name="tamanho"
                value="grande"
                checked={animal.tamanho === "grande"}
                onChange={handleChange}
              />
              Grande
            </label>
            <label>
              <input
                type="radio"
                name="tamanho"
                value="medio"
                checked={animal.tamanho === "medio"}
                onChange={handleChange}
              />
              Médio
            </label>
            <label>
              <input
                type="radio"
                name="tamanho"
                value="pequeno"
                checked={animal.tamanho === "pequeno"}
                onChange={handleChange}
              />
              Pequeno
            </label>
          </div>

          <input
            type="text"
            name="cor"
            placeholder="Cor"
            value={animal.cor}
            onChange={handleChange}
          />
          <input
            type="text"
            name="caracteristicas"
            placeholder="Características"
            value={animal.caracteristicas}
            onChange={handleChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={animal.status}
            onChange={handleChange}
          />
          <input
            type="date"
            name="data_entrada"
            placeholder="Data de Entrada"
            value={animal.data_entrada}
            onChange={handleChange}
          />
          <input
            type="text"
            name="foto"
            placeholder="URL da Foto"
            value={animal.foto}
            onChange={handleChange}
          />
          
          <button type="submit" className="btn-custom">
            Cadastrar Animal
          </button>
          
        </form>
      </div>
       <div  className="imagen-cadastrar-animal">
         <img src="/imagens/logo2.png" alt="Pet-Connection Logo" height="150" />
       </div>
    </div>
    
  );
};

export default AnimalForm;
