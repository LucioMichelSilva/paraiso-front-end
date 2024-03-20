// EditService.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditClient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    if (location.state && location.state.client) {
      const { name, email } = location.state.client;
      setFormData({ name, email });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email } = formData;
      const clientId = location.state.client.id;
      await axios.put(`http://localhost:3001/clients/${clientId}`, { name, email });
      // Após a edição bem-sucedida, você pode redirecionar o usuário de volta para a página de serviços
      navigate('/clients');
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
    }
  };

  return (
    <div>
      <h2>Editar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descrição:</label>
          <textarea className="form-control" id="description" name="description" value={formData.email} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default EditClient;
