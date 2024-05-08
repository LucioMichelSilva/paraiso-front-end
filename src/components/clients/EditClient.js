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
    color:#fff;
    MARGIN-RIGHT: 10PX;
  }
  &:hover {
    background-color:  #6db16b;
    border-color:  #6db16b;
    color:#fff;
  }
  
 
`;

const EditClient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '' 
  });

  const [error, setError] = useState('');

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
    
    if (!formData.name || !formData.email) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const { name, email } = formData;
      const clientId = location.state.client.id;
      await axios.put(`http://localhost:3001/clients/${clientId}`, { name, email });
      navigate('/clients');
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
    }
  };

  return (
    <div>
      <Heading>Editar Cliente</Heading>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="mb-3">
            <FormLabel htmlFor="name">Nome:</FormLabel>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <FormLabel htmlFor="email">Email:</FormLabel> 
            <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} /> 
          </div>
          <SubmitButton type="submit" className="btn">Salvar</SubmitButton>

          {/*<SubmitButton type="submit" className="btn" style={{background:'red', borderColor:'red'}}>Desabilitar cliente</SubmitButton>*/}
        </Form>
      </FormContainer>
    </div>
  );
};

export default EditClient;
