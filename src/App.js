// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Services from './components/services/Services';
import EditService from './components/services/EditService'; // Importe o componente EditService aqui
import AddService from './components/services/AddService'; // Importe o componente AddService
import Clients from './components/clients/Clients';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientPhotos from './components/clients/ClientPhotos';
import PhotoDetail from './components/clients/PhotoDetail';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div>
        {token ? <Sidebar onLogout={handleLogout} /> : null}
        <Routes>
          <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login setToken={handleLogin} />} />
          <Route path="/" element={token ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="services/new" element={<AddService />} /> {/* Rota para adicionar um novo serviço */}
          <Route path="/services/:serviceId/edit" element={<EditService />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/new" element={<AddClient />} />
          <Route path="/clients/:clientId/edit" element={<EditClient />} />
          <Route path="/photos/:clientId/:photoURL" element={<PhotoDetail />} />
          <Route path="/clients/:clientId/photos" element={<ClientPhotos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
