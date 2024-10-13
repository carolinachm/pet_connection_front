import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/Home.css"; // Importa o arquivo CSS para personalização
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const visualizarSenha = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação de login - você pode substituir por uma API
    if (email === "admin@pet.com" && password === "123456") {
      // Redireciona para o dashboard após login bem-sucedido
      navigate("/dashboard");
    } else {
      toast.error("Login inválido!");
    }
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1>Bem-vindo ao Pet Connection</h1>
        <p>O Pet Connection ajuda você a conectar-se com o seu pet ideal.</p>

        {/* Formulário de Login diretamente na página */}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="custom-input" // Adicionando uma classe personalizada
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="password-group">
        <Form.Control
          type={showPassword ? "text" : "password"} // Alterna entre 'text' e 'password'
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="password-toggle-icon" onClick={visualizarSenha}>
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} {/* Alterna ícone */}
        </span>
      </Form.Group>

          <Button type="submit" variant="primary" className="submit-button">
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Home;
