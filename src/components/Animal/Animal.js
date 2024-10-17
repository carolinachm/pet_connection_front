import React, { useState } from "react";
import axios from "axios";
import "./Animal.css";
import { toast } from "react-toastify";

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
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "idade") {
      if (!/^\d*$/.test(value)) {
        toast.error("A idade deve ser um número inteiro.");
        return;
      }
    }
    setAnimal({ ...animal, [name]: value });
  };

  const handleFileChange = (e) => {
    setAnimal({ ...animal, foto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação de idade: Verifica se é um número inteiro.
    if (animal.idade && !Number.isInteger(Number(animal.idade))) {
      toast.error("A idade deve ser um número inteiro.");
      return;
    }

    const formData = new FormData();
    for (let key in animal) {
      formData.append(key, animal[key]);
    }

    // Debug: Verifique os dados que estão sendo enviados
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

    try {
      const response = await axios.post(
        "http://localhost:3002/api/animal",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
        foto: null,
      });
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="form-container">
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
        <input
          type="text"
          name="sexo"
          placeholder="Sexo"
          value={animal.sexo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tamanho"
          placeholder="Tamanho"
          value={animal.tamanho}
          onChange={handleChange}
        />
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
          type="file"
          name="foto"
          accept="image/*"
          placeholder="URL da Foto"
          onChange={handleFileChange}
        />
        <button type="submit" className="btn-custom">
          Cadastrar Animal
        </button>
      </form>
    </div>
  );
};

export default AnimalForm;
