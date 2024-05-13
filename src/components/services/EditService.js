import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos usando Styled Components
const Heading = styled.h2`
  font-family: sans-serif;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: green;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin-left: 5%;
  width: 75%;
  border: 1px solid green;
  border-radius: 10px;
  padding: 20px;
`;

const FormLabel = styled.label`
  font-family: sans-serif;
  font-weight: bold;
`;

const SubmitButton = styled.button`
&{
  background-color: green;
  border-color: green;
  margin-right: 5px;
  color:#fff
}
&:hover {
  background-color:  #6db16b;
  border-color:  #6db16b;
  color:#fff
}
`;

const EditService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const [error, setError] = useState('');

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
    if (!formData.name || !formData.description) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
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
      <Heading>Editar Serviço</Heading>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="mb-3">
            <FormLabel htmlFor="name">Nome:</FormLabel>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <FormLabel htmlFor="description">Descrição:</FormLabel>
            <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <SubmitButton type="submit" className="btn">Salvar</SubmitButton>
        </Form>
      </FormContainer>
    </div>
  );
};

export default EditService;
