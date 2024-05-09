import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {onDelete} from 'react';
import Clients from './Clients';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PhotoDetail = () => {
  const { clientId, photoURL, serviceId } = useParams();
  const handleDelete = ({onDelete}) => {
    onDelete();
  };


  return (
    <div className="container mt-4">
    <div className="row justify-content-center" style={{marginBottom:'10%'}}>
      <div className="col-md-8">
        <Link to={`/clients/${clientId}/photos`}  className="btn  me-2" style={{color:'#fff',fontFamily:'sans-serif',backgroundColor:'green', marginBottom:'10px'}}> <FontAwesomeIcon icon={faArrowLeft} color="#fff" />  Voltar para Fotos</Link>
        <img src={photoURL} alt="Foto em tamanho real" className="img-fluid" />
      {/*<button onClick={handleDelete} className="btn btn-danger mt-2">Excluir Imagem</button>*/ }  
      </div>
    </div>
  </div>
  );
};

export default PhotoDetail;
