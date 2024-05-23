import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const PhotoDetail = () => {
  const { clientId, photoURL, serviceId } = useParams();
  //const history = history();

 /* const deleteImage = async () => {
    try {
      await axios.delete(`/clients/${clientId}/photos`);
      alert('Imagem deletada com sucesso!');
      history.push(`/clients/${clientId}/photos`);
    } catch (error) {
      console.error('Erro ao deletar imagem:', error);
      alert('Erro ao deletar imagem. Tente novamente mais tarde.');
    }
  };*/

  return (
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <Link to={`/clients/${clientId}/photos`}  className="btn  me-2" style={{color:'#fff',fontFamily:'sans-serif',backgroundColor:'green', marginBottom:'10px'}}> <FontAwesomeIcon icon={faArrowLeft} color="#fff" />  Voltar para Fotos</Link>
         <button  className="btn mt-2" style={{color:'#fff',fontFamily:'sans-serif',backgroundColor:'#dc3545', marginBottom:'19px'}}>Excluir Imagem</button>
        <img src={photoURL} alt="Foto em tamanho real" className="img-fluid" /> 
      </div>
    </div>
  </div>
  );
};

export default PhotoDetail;
