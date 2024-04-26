import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, preencha Usuario e Senhar.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/auth/login', { username, password });
      const token = response.data.token;
      setToken(token);
      setError(''); 
    } catch (error) {
      setError('Erro ao fazer login, Verifique suas credenciais.');
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="container">
        <div className="container2">
          <h1 className='lblParaiso'>Paraisso Jardinagem</h1>
          <div className="leaf-icon-container">
          <FontAwesomeIcon icon={faLeaf} className='leaf-icon'/>
          </div>
        </div>
     <div className="form-container">
      <h2 className='loginLBL'>Login</h2>
      <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input className='form-group input' type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
           <input className='form-group input' type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
            <button type="submit">Entrar</button>
        </div>

        <div className='form-group'>
          <label className='lblAvicos'>Faça o login e acesse os serviços</label>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
