// AddClient.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/clients', formData);
      // Após a criação bem-sucedida, você pode redirecionar o usuário de volta para a página de serviços
      navigate('/clients');
    } catch (error) {
      console.error('Erro ao adicionar serviço:', error);
    }
  };

  return (
    <div>
      <h2 style={{fontFamily:'sans-serif'}}>Novo Cliente</h2>
      <form onSubmit={handleSubmit}  style={{marginLeft:'5%', width:'75%', border:'1px solid green', borderRadius:'10px',padding:'20px'}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Nome:</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Email:</label>
          <textarea className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{backgroundColor:'green', borderColor:'green' }}>Salvar</button>
      </form>
    </div>
  );
};

export default AddClient;
