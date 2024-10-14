import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {
  getUsuarios,
  createUsuario,
  deleteUsuario
} from '../../service/usuarioService'; // Importa as funções do serviço

function Usuario() {
  const [show, setShow] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({ nome: '', email: '', senha: '' });

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await getUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNovoUsuario({ ...novoUsuario, [e.target.name]: e.target.value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      await createUsuario(novoUsuario);
      const data = await getUsuarios(); // Recarrega a lista de usuários
      setUsuarios(data);
      setNovoUsuario({ nome: '', email: '', senha: '' });
      handleClose();
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
      <div className="container mt-5">
        <h1>Usuários</h1>
        <Button variant="primary" onClick={handleShow}>
          Cadastrar Usuário
        </Button>

        {/* Modal de Cadastro de Usuário */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCadastro}>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={novoUsuario.nome}
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
                    value={novoUsuario.email}
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
                    value={novoUsuario.senha}
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
                  <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario, index) => (
                    <tr key={index}>
                      <td>{usuario.nome}</td>
                      <td>{usuario.email}</td>
                      <td>
                        <Button variant="danger" onClick={async () => {
                          try {
                            await deleteUsuario(usuario.id);
                            const data = await getUsuarios();
                            setUsuarios(data);
                          } catch (error) {
                            console.error('Erro ao deletar usuário:', error);
                          }
                        }}>
                          Deletar
                        </Button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
          )}
        </div>
      </div>
  );
}

export default Usuario;
