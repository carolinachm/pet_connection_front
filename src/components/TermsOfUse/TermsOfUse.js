import React from 'react';
import { Container } from 'react-bootstrap';
import './TermsOfUse.css'; // Adicione um arquivo CSS para estilizar a página se necessário

function TermsOfUse() {
    return (
        <Container>
            <h1>Termos de Uso</h1>
            <p>Última atualização: 13/10/2024</p>
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e usar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com estes termos, não deve usar o site.</p>

            <h2>2. Uso do Site</h2>
            <p>Você concorda em usar o site apenas para fins legais e de acordo com todas as leis aplicáveis.</p>

            <h2>3. Propriedade Intelectual</h2>
            <p>Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens e software, é propriedade da [Seu Nome ou Nome da Empresa] e é protegido por leis de direitos autorais e propriedade intelectual.</p>

            <h2>4. Limitação de Responsabilidade</h2>
            <p>O site é fornecido "como está" e [Seu Nome ou Nome da Empresa] não assume qualquer responsabilidade por danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da incapacidade de usar o site.</p>

            <h2>5. Alterações aos Termos</h2>
            <p>PetConnection reserva-se o direito de modificar estes Termos de Uso a qualquer momento. A continuação do uso do site após quaisquer alterações constitui a aceitação dos novos termos.</p>

            <h2>6. Contato</h2>
            <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através de [informações de contato].</p>
        </Container>
    );
}

export default TermsOfUse;
