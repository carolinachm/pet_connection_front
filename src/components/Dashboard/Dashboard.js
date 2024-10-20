import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import "./Dashboard.css";
import { useInView } from "react-intersection-observer";

function Dashboard() {
  const { ref: animalCard1Ref, inView: animalCard1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: animalCard2Ref, inView: animalCard2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: animalCard3Ref, inView: animalCard3InView } = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      {/* Div abaixo do cabeçalho com o logo à esquerda e o menu hamburguer à direita */}
      <div className="header-below">
        <Container fluid>
          <Row>
            <Col md={6} className="logo-container">
              <img
                src="/imagens/logo2.png"
                alt="Pet-Connection Logo"
                height="120"
              />
            </Col>
            <Col md={6} className="menu-container text-right">
              <Navbar expand="lg" className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <div className="action-buttons">
                    <Button as={Link} to="/usuario" className="btn-custom">
                      Usuário
                    </Button>
                    <Button as={Link} to="/padrinho" className="btn-custom">
                      Padrinho
                    </Button>
                    <Button
                      as={Link}
                      to="/AcessoRestrito"
                      className="btn-custom"
                    >
                      Acesso Restrito
                    </Button>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Seção principal com imagem de fundo e botões centralizados */}
      <div className="main-section">
        <img
          src="/imagens/—Pngtree—happy dog giving high five_15465214.png"
          alt="Animal Left"
          className="animal-left"
        />
        <div className="content">
          <h2>Facilitamos a conexão entre você e seu futuro pet</h2>
          <div className="buttons">
            <Button variant="primary" className="btn-custom adopt-btn">
              Adote
            </Button>{" "}
            <h4>ou</h4>
            <Button variant="secondary" className="btn-custom sponsor-btn">
              Apadrinhe
            </Button>
          </div>
        </div>
        <img
          src="/imagens/pngtree-cute-cat-paw-tricolor-calico-breed-png-image_11580204.png"
          alt="Animal Right"
          className="animal-right"
        />
      </div>

      {/* Título da próxima seção */}
      <h3 className="section-title">
        Confira alguns bichinhos disponíveis para adoção
      </h3>

      {/* Seção com cards dos animais */}
      <Container fluid>
        <Row>
          <Col md={4}>
            <div
              ref={animalCard1Ref}
              className={`animal-card ${
                animalCard1InView ? "visible" : "hidden"
              }`}
            >
              <img src="/imagens/gato.webp" alt="Animal 1" />
              <div className="animal-info">
                <div className="animal-name">Rex</div>
                <div className="animal-details">
                  <div>Macho</div>
                  <div>Castrado</div>
                  <div>São Paulo</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div
              ref={animalCard2Ref}
              className={`animal-card ${
                animalCard2InView ? "visible" : "hidden"
              }`}
            >
              <img src="/imagens/dog.webp" alt="Animal 2" />
              <div className="animal-info">
                <div className="animal-name">Luna</div>
                <div className="animal-details">
                  <div>Fêmea</div>
                  <div>Não castrada</div>
                  <div>Rio de Janeiro</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div
              ref={animalCard3Ref}
              className={`animal-card ${
                animalCard3InView ? "visible" : "hidden"
              }`}
            >
              <img src="/imagens/catdog.webp" alt="Animal 3" />
              <div className="animal-info">
                <div className="animal-name">Max</div>
                <div className="animal-details">
                  <div>Macho</div>
                  <div>Castrado</div>
                  <div>Curitiba</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Rodapé */}
      <footer>
        <Container>
          <Row className="footer-content">
            <Col md={4}>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/contato">
                  Contato
                </Nav.Link>
                <Nav.Link as={Link} to="/About">
                  Sobre
                </Nav.Link>
                <Nav.Link as={Link} to="/politica">
                  Política de Privacidade
                </Nav.Link>
                <Nav.Link as={Link} to="/termos">
                  Termos de Uso
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={4} className="text-center">
              <p>PetConnection - Todos os direitos reservados</p>
            </Col>
            <Col md={4} className="text-right">
              <img
                src="/imagens/logo2.png"
                alt="Pet-Connection Logo"
                height="120"
              />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Dashboard;
