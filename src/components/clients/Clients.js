// Services.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3001/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Erro ao buscar serviços:', error);
    }
  };

  const handleEdit = (client) => {
    navigate(`/clients/${client.id}/edit`, { state: { client } });
  };

  const handleCreate = () => {
    navigate('/clients/new'); // Redireciona para a página de criação de serviços
  };

  return (
    <div>
      <h2>Serviços</h2>
      <ul className="list-group">
        {clients.map(client => (
          <li key={client.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{client.name}</strong>
              <p>{client.email}</p>
              <Link to={`/clients/${client.id}/photos`}>Ver Fotos</Link>
            </div>
            <div>
              <button className="btn btn-primary me-2" onClick={() => handleEdit(clients)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-primary me-2" onClick={() => handleCreate(clients)}>
                <FontAwesomeIcon icon={faEye} />
              </button>
              {/* Adicione outros botões ou ações aqui, se necessário */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
