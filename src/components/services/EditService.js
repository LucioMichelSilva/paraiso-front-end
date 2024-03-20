// EditService.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditService = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, description } = formData;
      const serviceId = location.state.service.id;
      await axios.put(`http://localhost:3001/services/${serviceId}`, { name, description });
      // Após a edição bem-sucedida, você pode redirecionar o usuário de volta para a página de serviços
      navigate('/services');
    } catch (error) {
      console.error('Erro ao editar serviço:', error);
    }
  };

  return (
    <div>
      <h2>Editar Serviço</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descrição:</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default EditService;
