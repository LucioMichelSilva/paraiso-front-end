import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ClientPhotos = () => {
  const [photoGroups, setPhotoGroups] = useState([]);
  const { clientId } = useParams();
  const { serviceId } = useParams();

  useEffect(() => {
    if (clientId) fetchPhotos(clientId); // Assegura que clientId está disponível
  }, [clientId]);

  const fetchPhotos = async (clientId) => {
    try {
      const response = await axios.get(`http://localhost:3001/images/grouped/${clientId}`);
      const groups = response.data.map(group => ({
        ...group,
        photos: group.photos.map(photo => ({
          ...photo,
          photoURL: `data:image/jpeg;base64,${photo.photoBuffer}` // Assume que as fotos são em formato jpeg
        }))
      }));

      // Agrupar por serviceId e createdAt
      const groupedByServiceAndDate = {};
      groups.forEach(group => {
        const key = `${group.serviceId}_${group.createdAt}`;
        if (!groupedByServiceAndDate[key]) {
          groupedByServiceAndDate[key] = {
            serviceId: group.serviceId,
            createdAt: group.createdAt,
            photos: []
          };
        }
        groupedByServiceAndDate[key].photos.push(...group.photos);
      });

      setPhotoGroups(Object.values(groupedByServiceAndDate));
    } catch (error) {
      console.error('Erro ao buscar fotos dos clientes:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photoGroups.map(group => (
          <div key={`${group.serviceId}_${group.createdAt}`} className="col">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title text-center">{group.serviceId} - {group.createdAt}</h5>
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
