import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ExcluirService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    if (location.state && location.state.service) {
      const { name, description } = location.state.service;
      setFormData({ name, description });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    try {
      const serviceId = location.state.service.id;
      await axios.delete(`http://localhost:3001/services/${serviceId}`);
      // Após a exclusão bem-sucedida, você pode redirecionar o usuário de volta para a página de serviços
      navigate('/services');
    } catch (error) {
      console.error('Erro ao excluir serviço:', error);
    }
  };

  return (
    <div>
      <h1>Excluir Serviço</h1>
      <form onSubmit={handleDelete}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled
        />
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          disabled
        />
        <button type="submit">Excluir Serviço</button>
      </form>
    </div>
  );
};

export default ExcluirService;
