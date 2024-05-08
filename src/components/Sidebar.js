// Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'	#cbe9cb'}}>
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Paraiso <FontAwesomeIcon icon={faLeaf} color='green' /></span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link sidebar-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link sidebar-link">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to="/clients" className="nav-link sidebar-link">Clientes</Link>
          </li>
        </ul>
      </div>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
       {/* Estilos CSS inline */}
       <style>
        {`
          .sidebar-link {
            color: black;
            font-weight: bold;
            font-family: sans-serif;
            transition: color 0.3s;
          }

          .sidebar-link:hover {
            color: green; 
          }
        `}
      </style>
    </nav>
  );
};

export default Sidebar;
