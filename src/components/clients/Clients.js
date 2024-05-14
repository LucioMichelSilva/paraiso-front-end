import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
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

  .invalid-email {
    color: red;
    font-weight: bold;
  }
`;

const Button = styled.button`
&{
  background-color: green;
  border-color: green;
  margin-right: 5px;
  color: white;
}
&:hover {
  background-color:  #6db16b;
  border-color:  #6db16b;
  color: white;
}
`;


const RightAlignedDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 5%;
`;

const Clients = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:3001/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const handleEdit = (client) => {
    navigate(`/clients/${client.id}/edit`, { state: { client } });
  };

  const handleCreate = () => {
    navigate('/clients/new');
  };

  // Função de validação de e-mail
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
     <Heading>Clientes</Heading>
        <RightAlignedDiv>
          <Button className="btn" onClick={() => handleCreate()}>
          Novo Cliente +
          </Button>
        </RightAlignedDiv>
      <List>
        {clients.map(client => (
          <ListItem key={client.id}>
            <div>
              <strong>{client.name}</strong>
              <p className={isValidEmail(client.email) ? '' : 'invalid-email'}>
                {isValidEmail(client.email) ? client.email : 'E-mail inválido'}
              </p>
              {isValidEmail(client.email) && (
                <Link to={`/clients/${client.id}/photos`} className={"sidebar-LINK2"}>Ver Fotos</Link>
              )}
            </div>
            <div>
              <Button className="btn me-2" onClick={() => handleEdit(client)}>
                <FontAwesomeIcon icon={faEdit} color='#fff' />
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
      <style>
        {`
          .sidebar-LINK2 {
            color: green;
            font-weight: bold;
            font-family: sans-serif;
            transition: color 0.3s;
          }

          .sidebar-LINK2:hover {
            color: #74d175; 
          }
        `}
      </style>
    </div>
  );
};

export default Clients;
