// AddService.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/services', formData);
      // Após a criação bem-sucedida, você pode redirecionar o usuário de volta para a página de serviços
      navigate('/services');
    } catch (error) {
      console.error('Erro ao adicionar serviço:', error);
    }
  };

  return (
    <div>
      <h2>Novo Serviço</h2>
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

export default AddService;