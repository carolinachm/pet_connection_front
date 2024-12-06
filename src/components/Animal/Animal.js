import React, { useState, useEffect } from "react";
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
    id_abrigo: "", // campo para armazenar o id do abrigo
  });

  const [abrigos, setAbrigos] = useState([]);

  // Carregar os abrigos disponíveis
  useEffect(() => {
    const fetchAbrigos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/Abrigos");
        setAbrigos(response.data); // Presume-se que a resposta seja um array de abrigos
      } catch (error) {
        console.error("Erro ao carregar os abrigos:", error);
        toast.error("Erro ao carregar os abrigos.");
      }
    };
    fetchAbrigos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/animais", animal);
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
        id_abrigo: "", // Limpa o campo de abrigo após o envio
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

        {/* Campo de seleção de abrigo */}
        <select name="id_abrigo" value={animal.id_abrigo} onChange={handleChange} required>
          <option value="">Selecione um Abrigo</option>
          {abrigos.map((abrigo) => (
            <option key={abrigo.id} value={abrigo.id}>
              {abrigo.nome}
            </option>
          ))}
        </select>

        <button type="submit" className="btn-custom">Cadastrar Animal</button>
      </form>
    </div>
  );
};

export default AnimalForm;
