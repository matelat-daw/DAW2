import React, { useEffect, useState } from 'react';
import { getRecetas, getImages } from '../services/Service';
import { useNavigate } from 'react-router-dom';
import toast from '../services/js/script.js';
import logo from '../assets/spinner.gif';

const Read = () => {
    const navegar = useNavigate();
    const [recetas, setRecetas] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true);
    const fetchItems = async () => {
      const recetas = await getRecetas();
      const images = await getImages(recetas);
      setIsLoading(false);
      setRecetas(recetas);
      setImages(images);
    };
    fetchItems();
  }, []);

  if (isLoading) {
    return <div><h2>Cargando...</h2><img src={logo} alt='Rueda Cargando'></img></div>;
  }

  return (
    <div>
      <h2>Lista de Recetas con Imágenes</h2>
      <br />
      <button onClick={ (e) => navegar('/create')} className='btn btn-success left'>Añadir Receta</button>
      <br /><br />
      <table>
        <thead>
            <tr><th>ID</th><th>Nombre</th><th>Tipo de Cocina</th><th>Imagen</th><th>Acciones</th></tr>
        </thead>
        <tbody>
                {recetas.map((receta, i) => (
                    <tr key={receta.id}><td>{receta.id}</td><td>{receta.name}</td><td>{receta.cuisine}</td><td><a href={receta.image} target='_blank'><img src={images[i].image} width={120} /></a></td><td><button onClick={ (e) => navegar(`/details/${receta.id}`)} className='btn btn-primary'>Detalles</button>&nbsp;&nbsp;<button onClick={ (e) => navegar(`/create/${receta.id}`)} className='btn btn-info'>Actualizar</button>&nbsp;&nbsp;<button onClick={(e)=> navegar(`/delete/${receta.id}`)} className='btn btn-danger'>Eliminar</button></td></tr>
                ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;