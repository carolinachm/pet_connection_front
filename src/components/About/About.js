import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Adicione um arquivo CSS para estilizar a página se necessário

function About() {
    return (
        <Container>
            <h1>Sobre Nós</h1>
            <p>Bem-vindo ao Pet-Connection, uma plataforma dedicada a conectar animais necessitados a lares amorosos.</p>

            <h2>Nossa Missão</h2>
            <p>Nosso objetivo é facilitar o processo de adoção e apadrinhamento de pets, promovendo a conscientização sobre a importância da adoção responsável.</p>

            <h2>Quem Somos</h2>
            <p>Somos uma equipe apaixonada por animais e comprometida em ajudar a encontrar lares para aqueles que mais precisam. Trabalhamos em parceria com abrigos e ONGs para garantir que cada animal tenha uma chance de encontrar uma família amorosa.</p>

            <h2>Como Funciona</h2>
            <p>Através do nosso site, você pode explorar perfis de animais disponíveis para adoção ou apadrinhamento, obter informações sobre cada um deles e iniciar o processo de adoção.</p>

            <h2>Entre em Contato</h2>
            <p>Se você tiver perguntas ou precisar de mais informações, não hesite em nos contatar através de [informações de contato].</p>
        </Container>
    );
}

export default About;
