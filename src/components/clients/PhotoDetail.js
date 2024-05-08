import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {onDelete} from 'react';
import Clients from './Clients';

const PhotoDetail = () => {
  const { clientId, photoURL, serviceId } = useParams();
  const handleDelete = ({onDelete}) => {
    onDelete();
  };


  return (
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <Link to={`/clients/${clientId}/photos`}  className="btn  me-2" style={{color:'#fff',fontFamily:'sans-serif',backgroundColor:'green', marginBottom:'10px'}}> Voltar para Fotos</Link>
        <img src={photoURL} alt="Foto em tamanho real" className="img-fluid" />
      {/*<button onClick={handleDelete} className="btn btn-danger mt-2">Excluir Imagem</button>*/ }  
      </div>
    </div>
  </div>
  );
};

export default PhotoDetail;
