import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

// Estilos para o banner
const Banner = styled.section`
  background-color: #f0f0f0;
  padding: 30px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

// Estilos para as seções
const Section = styled.section`
  padding: 18px 115px
`;
const MainTitle = styled.h1`
  color: green;
  font-size: 36px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  
`;

// Estilos para os títulos das seções
const SectionTitle = styled.h2`
  color: #333;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  
`;

// Estilos para o texto das seções
const SectionText = styled.p`
  color: #666;
  font-size: 16px;
`;

// Estilos para a lista de serviços
const ServiceList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

// Estilos para os itens da lista de serviços
const ServiceItem = styled.li`
  margin-bottom: 4px;
`;

// Estilos para o botão de CTA
const CallToActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Estilos para o rodapé
const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
`;

const Home = () => {
  return (
    <div>
      {/* Banner ou Slider */}
      <Banner>
        <MainTitle>Paraiso Jardinagem</MainTitle>
        <p>Sua solução em jardinagem e paisagismo</p>
      </Banner>

     
      <Section>
        <SectionTitle> <FontAwesomeIcon icon={faLeaf} color='green' /> Sobre Nós:</SectionTitle>
        <SectionText>Somos especialistas em transformar espaços verdes em verdadeiros paraísos. Nossa equipe experiente e dedicada está pronta para atender às suas necessidades de jardinagem e paisagismo.</SectionText>
      </Section>

      
      <Section>
        <SectionTitle> <FontAwesomeIcon icon={faLeaf} color='green' /> Serviços:</SectionTitle>
        <ServiceList>
          <ServiceItem>Jardinagem residencial</ServiceItem>
          <ServiceItem>Manutenção de jardins</ServiceItem>
          <ServiceItem>Paisagismo</ServiceItem>
          <ServiceItem>Instalação de sistemas de irrigação</ServiceItem>
          {/* Adicione mais serviços conforme necessário */}
        </ServiceList>
      </Section>

     
      <Section>
        <SectionTitle> <FontAwesomeIcon icon={faLeaf} color='green' /> Clientes:</SectionTitle>
        <SectionText>Confira o que nossos clientes têm a dizer sobre nossos serviços:</SectionText>
        <ul>
          <li>"A Paraiso Jardinagem transformou meu jardim em um verdadeiro paraíso! Altamente recomendado!" </li>
          <li>"Profissionais competentes e serviço de qualidade. Estou muito satisfeito com o resultado!" </li>
          {/* Adicione mais depoimentos conforme necessário */}
        </ul>
      </Section>

     
      <Section>
        <SectionTitle> <FontAwesomeIcon icon={faLeaf} color='green' /> Entre em Contato:</SectionTitle>
        <SectionText>Emtre em contato com a gente:</SectionText>
        {/* Adicione aqui o código para o formulário de contato */}
      </Section>

      {/* Rodapé */}
      <Footer>
        <p>&copy; 2024 Paraiso Jardinagem. Todos os direitos reservados.</p>
      </Footer>
    </div>
  );
};

export default Home;
