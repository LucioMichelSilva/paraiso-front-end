// Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1"> <FontAwesomeIcon icon={faLeaf} /></span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{color: 'green', fontWeight:'bold',fontFamily:'sans-serif' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link"  style={{color: 'green', fontWeight:'bold', fontFamily:'sans-serif'}}>Serviços</Link>
            </li>
            <li className="nav-item">
              <Link to="/clients" className="nav-link" style={{color: 'green', fontWeight:'bold', fontFamily:'sans-serif' }}>Clientes</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Sidebar;
