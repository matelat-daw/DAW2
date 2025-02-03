import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { deleteAlumno } from '../services/Service';
import { deleteReceta } from '../services/Service';

const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteReceta(parseInt(id));
    navigate('/read');
  };

  return (
    <div>
      <h2>Eliminar el Alumno con ID: {id}</h2>
      <p>¿Estás Seguro que Quieres Eliminar ese Alumno?</p>
      <button onClick={handleDelete}>Eliminar</button>
      <button onClick={() => navigate('/read')}>Cancel</button>
    </div>
  );
};

export default Delete;