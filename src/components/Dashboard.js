
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';

function Dashboard() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Meu Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/usuarios">Usuários</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container fluid>
                <Row>
                    <Col md={2} className="bg-light p-3">
                        <h4 className="text-center">Menu</h4>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/usuarios">Usuários</Nav.Link>

                        </Nav>
                    </Col>
                    <Col md={10} className="p-4">
                        <h1>Bem-vindo ao Dashboard</h1>
                        <p>Pet Connection.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
