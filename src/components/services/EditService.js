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
      <h2 style={{fontFamily:'sans-serif'}}>Editar Serviço</h2>
      <form onSubmit={handleSubmit} style={{marginLeft:'5%', width:'75%', border:'1px solid green', borderRadius:'10px',padding:'20px'}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Nome:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label"style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Descrição:</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{backgroundColor:'green', borderColor:'green' }}>Salvar</button>
      </form>
    </div>
  );
};

export default EditService;
