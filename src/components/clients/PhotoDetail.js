import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {onDelete} from 'react';

const PhotoDetail = () => {
  const { clientId, photoURL, serviceId } = useParams();
  const handleDelete = ({onDelete}) => {
    onDelete();
  };


  return (
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <Link to={`/clients/${clientId}/photos`}> Voltar para Fotos</Link>
        <img src={photoURL} alt="Foto em tamanho real" className="img-fluid" />
        <button onClick={handleDelete} className="btn btn-danger mt-2">Excluir Imagem</button>
      </div>
    </div>
  </div>
  );
};

export default PhotoDetail;
