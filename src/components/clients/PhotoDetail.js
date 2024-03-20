import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PhotoDetail = () => {
  const { clientId, photoURL } = useParams();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Link to={`/clients/${clientId}/photos`}> Voltar para Fotos</Link>
          <img src={photoURL} alt="Foto em tamanho real" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
