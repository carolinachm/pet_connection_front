import React from 'react';
import { Container } from 'react-bootstrap';
import './PrivacyPolicy.css'; // Adicione um arquivo CSS para estilizar a página se necessário

function PrivacyPolicy() {
    return (
        <Container>
            <h1>Política de Privacidade</h1>
            <p>Última atualização: 13/10/2024</p>
            <h2>1. Informações que Coletamos</h2>
            <p>Coletamos informações pessoais que você nos fornece ao se registrar no site, preencher formulários ou entrar em contato conosco.</p>

            <h2>2. Uso das Informações</h2>
            <p>Usamos suas informações para:</p>
            <ul>
                <li>Fornecer e melhorar nossos serviços;</li>
                <li>Enviar comunicados e atualizações;</li>
                <li>Responder a solicitações e perguntas;</li>
            </ul>

            <h2>3. Compartilhamento de Informações</h2>
            <p>Não vendemos, trocamos ou de outra forma transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto conforme exigido por lei.</p>

            <h2>4. Segurança das Informações</h2>
            <p>Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhuma transmissão pela Internet é 100% segura, e não podemos garantir a segurança absoluta.</p>

            <h2>5. Alterações à Política de Privacidade</h2>
            <p>Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento. Qualquer alteração será publicada nesta página.</p>

            <h2>6. Contato</h2>
            <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através de [informações de contato].</p>
        </Container>
    );
}

export default PrivacyPolicy;
