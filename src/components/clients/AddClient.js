import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos usando Styled Components
const Container = styled.h2`
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
  color:#fff
}
&:hover {
  background-color:  #6db16b;
  border-color:  #6db16b;
  color:#fff
}
`;

const AddClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [error, setError] = useState('');

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
      await axios.post('http://localhost:3001/clients', formData);
      // Após a criação bem-sucedida, você pode redirecionar o usuário de volta para a página de serviços
      navigate('/clients');
    } catch (error) {
      console.error('Erro ao adicionar serviço:', error);
    }

  };

  return (
    <div>
      <Container>Novo Cliente</Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="mb-3">
            <FormLabel htmlFor="name">Nome:</FormLabel>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <FormLabel htmlFor="email">Email:</FormLabel>
            <input className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}></input>
          </div>
          <SubmitButton type="submit" className="btn ">Salvar</SubmitButton>
        </Form>
      </FormContainer>
    </div>
  );
};

export default AddClient;
