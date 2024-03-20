import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Importando o hook useParams

const ClientPhotos = () => {
  const [photoGroups, setPhotoGroups] = useState([]);
  const { clientId } = useParams(); // Usando useParams para obter o clientId da URL

  useEffect(() => {
    if(clientId) fetchPhotos(clientId); // Assegura que clientId está disponível
  }, [clientId]);

  const fetchPhotos = async (clientId) => {
    try {
      const response = await axios.get('http://localhost:3001/images/grouped/' + clientId);
      const groups = response.data.map(group => ({
        ...group,
        photos: group.photos.map(photo => ({
          ...photo,
          photoURL: `data:image/jpeg;base64,${photo.photoBuffer}` // Assume que as fotos são em formato jpeg
        }))
      }));
      setPhotoGroups(groups);
    } catch (error) {
      console.error('Erro ao buscar fotos dos clientes:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Fotos do Cliente</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photoGroups.map(group => (
          <div key={group.createdAt} className="col">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title text-center">{group.createdAt}</h5>
              </div>
              <div className="card-body">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                  {group.photos.map(photo => (
                    <div key={photo.id} className="col">
                      <Link to={`/photos/${clientId}/${encodeURIComponent(photo.photoURL)}`}>
                        <img src={photo.photoURL} alt="Foto do cliente" className="img-thumbnail img-thumbnail-lg" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPhotos;
