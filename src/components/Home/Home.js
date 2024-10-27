import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Home/Home.css"; // Importa o arquivo CSS para personalização
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// Importando as imagens de patinhas
const pawImages = [
  "/imagens/patinha_logo.png",
  "/imagens/patinha_logo.png",
  "/imagens/patinha_logo.png",
  // Adicione mais caminhos de imagens aqui
];

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [paws, setPaws] = useState([]); // Para armazenar as patinhas na tela
  const navigate = useNavigate();

  const visualizarSenha = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@pet.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      toast.error("Login inválido!");
    }
  };

  // Função para gerar posição aleatória
  const randomPosition = () => {
    const x = Math.random() * 90; // 90% da largura da tela
    const y = Math.random() * 90; // 90% da altura da tela
    return { x, y };
  };

  // Função para adicionar uma patinha à tela
  const addPaw = () => {
    const position = randomPosition();
    const image = pawImages[Math.floor(Math.random() * pawImages.length)];
    setPaws((prevPaws) => [...prevPaws, { ...position, image }]);

    // Remove a patinha após 3 segundos
    setTimeout(() => {
      setPaws((prevPaws) => prevPaws.filter((paw) => paw.image !== image));
    }, 3000);
  };

  // Adiciona uma patinha a cada 1 segundo
  useEffect(() => {
    const interval = setInterval(addPaw, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="paw-background">
        {paws.map((paw, index) => (
          <img
            key={index}
            
            className="paw"
            style={{ left: `${paw.x}%`, top: `${paw.y}%` }} // Posição em porcentagem
          />
        ))}
      </div>
      <div className="content-wrapper">
        <div>
          <h1>Bem-vindo ao Pet Connection</h1>
          <p>O Pet Connection ajuda você a conectar-se com o seu pet ideal.</p>
        </div>

        <div className="form-wrapper">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="custom-input"
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="password-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="custom-input"
              />
              <span className="password-toggle-icon" onClick={visualizarSenha}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </Form.Group>

            <Button type="submit" variant="primary" className="submit-button">
              Entrar
            </Button>
          </Form>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/imagens/logo2.png`} alt="" className="logo" />
    </div>
  );
}

export default Home;
