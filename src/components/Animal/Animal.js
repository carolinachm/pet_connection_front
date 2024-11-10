import React, { useState } from "react";
import axios from "axios";
import "./AnimalEstilo.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AnimalForm = () => {
  const navigate = useNavigate();
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

  const isIdadeValida = (idade) => {
    const idadeNum = Number(idade);
    return /^\d+$/.test(idade) && idadeNum >= 0; // Valida se é inteiro não negativo
  };

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
      toast.success("Animal cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      toast.error("Erro ao cadastrar o animal. Verifique os dados novamente");
    }
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Animal</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" value={animal.nome} onChange={handleChange} required />
        <input type="text" name="especie" placeholder="Espécie" value={animal.especie} onChange={handleChange} required />
        <input type="text" name="raca" placeholder="Raça" value={animal.raca} onChange={handleChange} />
        <input type="number" name="idade" placeholder="Idade" value={animal.idade} onChange={handleChange} />
        <input type="text" name="sexo" placeholder="Sexo" value={animal.sexo} onChange={handleChange} />
        <input type="text" name="tamanho" placeholder="Tamanho" value={animal.tamanho} onChange={handleChange} />
        <input type="text" name="cor" placeholder="Cor" value={animal.cor} onChange={handleChange} />
        <input type="text" name="caracteristicas" placeholder="Características" value={animal.caracteristicas} onChange={handleChange} />
        <input type="text" name="status" placeholder="Status" value={animal.status} onChange={handleChange} />
        <input type="date" name="data_entrada" placeholder="Data de Entrada" value={animal.data_entrada} onChange={handleChange} />
        <input type="text" name="foto" placeholder="URL da Foto" value={animal.foto} onChange={handleChange} />
        <button type="submit" className="btn-custom">Cadastrar Animal</button>
      </form>
    </div>
  );
};

export default AnimalForm;
