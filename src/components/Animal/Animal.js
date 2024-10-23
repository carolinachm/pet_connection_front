import React, { useCallback, useState } from "react";
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
    foto: null,
  });

  const isIdadeValida = (idade) => {
    const idadeNum = Number(idade);
    return /^\d+$/.test(idade) && idadeNum >= 0; // Valida se é inteiro não negativo
  }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "idade" && !isIdadeValida(value)) {
      toast.error("A idade deve ser um número inteiro");
      return;
    }
    setAnimal((prevAnimal) => ({ ...prevAnimal, [name]: value }));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione um arquivo de imagem válido.");
      return;
    }
    setAnimal((prevAnimal) => ({ ...prevAnimal, foto: file }));
  };

  const resetForm = () => {
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
  };

  const validarCampos = () => {
    if (animal.nome.trim() === "" || animal.especie.trim() === "") {
      toast.error("Preencha todos os campos obrigatórios.");
      return false;
    }
    if (animal.idade && !isIdadeValida(animal.idade)) {
      toast.error("A idade deve ser um número inteiro.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCampos()) return;

    const formData = new FormData();
    for (let key in animal) {
      formData.append(key, animal[key]);
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

      if (response.status >= 200 && response.status < 300) {
        toast.success("Animal cadastrado com sucesso");
        resetForm();
        navigate('/Adocao');
      } else {
        toast.error("Ocorreu um erro no cadastro. Tente Novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      toast.error("Erro ao cadastrar o animal. Verifique os dados novamente");
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
          required
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
