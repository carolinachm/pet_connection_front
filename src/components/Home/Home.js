import React, { useCallback, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Home/Home_module.css"; // Importa o arquivo CSS para personalização
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// Importando as imagens de patinhas
const pawImages = [
  `${process.env.PUBLIC_URL}/imagens/patinhas_gato.png`,
  `${process.env.PUBLIC_URL}/imagens/patinhas_gato.png`,
  `${process.env.PUBLIC_URL}/imagens/patinhas_gato.png`,
  `${process.env.PUBLIC_URL}/imagens/patinhas_gato.png`,
  `${process.env.PUBLIC_URL}/imagens/patinhas_gato.png`,
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
    const x = Math.random() * 95; // 95% da largura da tela
    const y = Math.random() * 95; // 95% da altura da tela
    return { x, y };
  };

  // Função para verificar se a nova posição colide com patinhas existentes
  const isPositionOccupied = (newPosition) => {
    return paws.some(paw => {
      const distance = Math.sqrt(
        Math.pow(newPosition.x - paw.x, 2) + Math.pow(newPosition.y - paw.y, 2)
      );
      return distance < 2; // Ajuste esse valor para aumentar ou diminuir o espaço
    });
  };

  // Função para adicionar uma patinha à tela
  const addPaw = useCallback(() => {
    if (paws.length < 40) { // Limita o número de patinhas na tela a 40
      let position;
      do {
        position = randomPosition();
      } while (isPositionOccupied(position)); // Gera nova posição até que não colida

      const image = pawImages[Math.floor(Math.random() * pawImages.length)];
      setPaws((prevPaws) => [...prevPaws, { ...position, image, isVisible: true }]);

      // Remove a patinha após 10 segundos
      const timeoutId = setTimeout(() => {
        setPaws((prevPaws) => prevPaws.filter((paw) => paw.image !== image));
      }, 10000); 

      return timeoutId; // Retorna o ID do timeout
    }
    return null;
  }, [paws]); // Adiciona paws como dependência para garantir a contagem correta

  // Função que controla o intervalo de adição de patinhas
  useEffect(() => {
    const interval = setInterval(() => {
      addPaw();
    }, 1000); // Adiciona uma nova patinha a cada 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [addPaw]);

  return (
    <div className="home-container">
      <div className="paw-background">
        {paws.map((paw, index) => (
          <img
            key={index}
            src={paw.image} // A imagem da patinha
            className="paw"
            style={{
              left: `${paw.x}%`,
              top: `${paw.y}%`,
              position: 'absolute',
              opacity: paw.isVisible ? 1 : 0, // Controla a opacidade
              transition: 'opacity 15s ease', // Transição suave
            }} // Transição suave
            alt=""
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
          <div className="register-link">
            <p>Não tem uma conta? <span onClick={() => navigate("/usuario")} className="cadastro-link">Cadastre-se</span></p>
          </div>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/imagens/logo2.png`} alt="Logo" className="logo-home" />
    </div>
  );
}

export default Home;
