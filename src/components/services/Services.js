// Services.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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
      <h2 style={{fontFamily:'sans-serif',}}>Serviços</h2>
      <ul className="list-group" style={{marginLeft:'5%', width:'90%'}}>
        {services.map(service => (
          <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong  style={{fontFamily:'sans-serif'}}>{service.name}</strong>
              <p  style={{color:'green'}}>{service.description}</p>
            </div>
            <div>
              <button className="btn btn-primary me-2" style={{backgroundColor:'green', borderColor:'green' }} onClick={() => handleEdit(service)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-primary me-2" style={{backgroundColor:'green', borderColor:'green' }} onClick={() => handleCreate(service)}>
                <FontAwesomeIcon icon={faPlus}  />
              </button>
              <button className="btn btn-primary me-2" style={{backgroundColor:'red', borderColor:'red' }}  onClick={() => handleDelete(service)}>
                <FontAwesomeIcon icon={faTrashAlt}  />
              </button>
              {/* Adicione outros botões ou ações aqui, se necessário */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
