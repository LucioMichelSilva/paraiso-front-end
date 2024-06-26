import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos usando Styled Components
const Heading = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 36px;
text-align: center;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
font-weight: bold;
color: green;
border-bottom: 1px solid green;
padding-bottom: 5px;
padding-top: 5px;
width: 300px; /* Adiciona a largura desejada */
margin: 0 auto; /* Centraliza horizontalmente */
`;

const List = styled.ul`
  margin-left: 5%;
  width: 90%;
`;

const ListItem = styled.li`
  & {
    list-style-type: none;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Button = styled.button`
&{
  background-color: green;
  border-color: green;
  margin-right: 5px;
  color:#fff
}
&:hover {
  background-color:  #6db16b;
  border-color:  #6db16b;
  color:#fff
}
`;
const Footer = styled.footer`
  background-color: #cbe9cb;
  color: #333;
  text-align: center;
  padding: 20px 0;
`;

const RightAlignedDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 5%;
`;


const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3001/services');
      setServices(response.data);
    } catch (error) {
      console.error('Erro ao buscar serviços:', error);
    }
  };

  const handleEdit = (service) => {
    navigate(`/services/${service.id}/edit`, { state: { service } });
  };

  const handleCreate = () => {
    navigate('/services/new'); // Redireciona para a página de criação de serviços
  };

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:3001/services/${serviceId}`);
      fetchServices(); // Atualiza a lista de serviços após a exclusão
    } catch (error) {
      console.error('Erro ao excluir serviço:', error);
    }
  };

  return (
    <div>
      <Heading>Serviços</Heading>
        < RightAlignedDiv>
              <Button className="btn   me-2" onClick={() => handleCreate(services)}>
                Novo Serviço +
              </Button>
        </RightAlignedDiv>

      <List>
        {services.map(service => (
          <ListItem key={service.id}>
            <div>
              <strong>{service.name}</strong>
              <p style={{color:'#006400',fontFamily:'sans-serif'}}>{service.description}</p>
            </div>
            <div>
              <Button className="btn  me-2" onClick={() => handleEdit(service)}>
                <FontAwesomeIcon icon={faEdit}  />
              </Button>
              {/* Adicione outros botões ou ações aqui, se necessário */}
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Services;
