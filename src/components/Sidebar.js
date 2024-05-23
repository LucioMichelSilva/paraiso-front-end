// Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import logo from '../logo.png'

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'	#cbe9cb'}}>
    <div className="container-fluid">
    <img src={logo} alt="Logo" style={{ width: '7%', height: '5%', marginRight: '2%' }} />
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link sidebar-link" style={{textShadow:'2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link sidebar-link"style={{textShadow:'2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Serviços</Link>
          </li>
          <li className="nav-item">
            <Link to="/clients" className="nav-link sidebar-link" style={{textShadow:'2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Clientes</Link>
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
            border-bottom: 1px solid green;
          }
        `}
      </style>
    </nav>
  );
};

export default Sidebar;
