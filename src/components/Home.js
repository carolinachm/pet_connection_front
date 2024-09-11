
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação de login - você pode substituir por uma API
    if (email === 'admin@pet.com' && password === '123456') {
      // Redireciona para o dashboard após login bem-sucedido
      history.push('/dashboard');
    } else {
      alert('Login inválido!');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Bem-vindo ao Pet_Connection</h1>
      <p>O Pet_Connection ajuda você a conectar-se com o seu pet ideal.</p>
      <Button onClick={() => setShowLoginModal(true)}>Login</Button>

      {/* Modal de Login */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Entrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Home;
