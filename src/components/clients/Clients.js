// Services.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
    navigate('/clients/new'); 
  };

  return (
    <div>
      <h2 style={{fontFamily:'sans-serif'}}>Clientes</h2>
      <ul className="list-group" style={{marginLeft:'5%', width:'90%'}}>
        {clients.map(client => (
          <li key={client.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong style={{fontFamily:'sans-serif'}}>{client.name}</strong>
              <p>{client.email}</p>
              <Link to={`/clients/${client.id}/photos`} style={{color:'green'}}>Ver Fotos</Link>
            </div>
            <div>
              <button className="btn btn-primary me-2" style={{backgroundColor:'green', borderColor:'green' }} onClick={() => handleEdit(clients)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-primary me-2" style={{backgroundColor:'green', borderColor:'green' }} onClick={() => handleCreate(clients)}>
                <FontAwesomeIcon icon={faPlus}  />
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
