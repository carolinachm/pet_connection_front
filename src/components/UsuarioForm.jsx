import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

function UsuarioForm() {
  // Define o estado inicial para os campos do formulário
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    endereco: "",
  });

  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  // Função para atualizar o estado ao mudar os valores dos campos
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Função de envio do formulário (por exemplo, para enviar para uma API)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario.nome || !usuario.email || !usuario.senha) {
      toast("Todos os campos são obrigatórios");
      return;
    }

    // Validação de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(usuario.email)) {
      toast("O email informado não é válido.");
      return;
    }

    if (usuario.senha.length < 6) {
      toast('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    console.log(usuario);

    // Aqui você pode fazer a chamada para a API ou salvar no banco de dados
    setUsuarios([...usuarios, usuario]);
    setUsuario({
      nome: "",
      email: "",
      senha: "",
      endereco: "",
    });
    setShow(false);
  };

  // Funções para abrir e fechar o modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container mt-5">
      <Button variant="primary" onClick={handleShow}>
        Cadastrar Usuário
      </Button>

      {/* Modal de Cadastro de Usuário */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                name="nome"
                value={usuario.nome}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                name="senha"
                value={usuario.senha}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Tabela de Usuários */}
      <div className="mt-5">
        <h2>Usuários Cadastrados</h2>
        {usuarios.length === 0 ? (
          <p>Nenhum usuário cadastrado ainda.</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UsuarioForm;
