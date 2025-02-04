import React, { useEffect, useState } from 'react';
import { getRecetas } from '../services/Service';
import { useNavigate } from 'react-router-dom';
import toast from '../services/js/script.js';
import logo from '../assets/spinner.gif';

const Read = () => {
    const navegar = useNavigate();
    const [recetas, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchItems = async () => {
      const recetas = await getRecetas();
      setIsLoading(false);
      setItems(recetas);
    };
    fetchItems();
  }, []);

  if (isLoading) {
    return <div><h2>Cargando...</h2><img src={logo} alt='Rueda Cargando'></img></div>;
  }

  return (
    <div>
      <h2>Lista de Recetas</h2>
      <table>
        <thead>
            <tr><th>ID</th><th>Nombre</th><th>Dificultad</th><th>Tipo de Cocina</th><th>Acciones</th></tr>
        </thead>
        <tbody>
                {recetas.map((receta) => (
                    <tr key={receta.id}><td>{receta.id}</td><td>{receta.name}</td><td>{receta.difficulty}</td><td>{receta.cuisine}</td><td><button onClick={ (e) => navegar(`/Recipie/${receta.id}`)} className='btn btn-primary'>Ver Receta</button>&nbsp;&nbsp;<button onClick={ (e) => navegar(`/create/${receta.id}`)} className='btn btn-primary'>Actualizar</button>&nbsp;&nbsp;<button onClick={(e)=> navegar(`/delete/${receta.id}`)} className='btn btn-danger'>Eliminar</button></td></tr>
                ))}
        </tbody>
      </table>
      <br />
      <button onClick={ (e) => navegar('/create')} className='btn btn-success'>Añadir Receta</button>
    </div>
  );
};

export default Read;