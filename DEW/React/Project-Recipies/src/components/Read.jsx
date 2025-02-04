import React, { useEffect, useState } from 'react';
import { getRecetas } from '../services/Service';
import { useNavigate } from 'react-router-dom';
import toast from '../services/js/script.js';

const Read = () => {
    const navegar = useNavigate();
    const [recetas, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getRecetas();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
            <tr><th>ID</th><th>Nombre</th><th>Dificultad</th><th>Tipo de Cocina</th><th>Acciones</th></tr>
        </thead>
        <tbody>
        {/* <script>{toast(0, "SÍ: ", "Se Han Cargado los Datos.")}</script> */}
                {recetas.map((receta) => (
                    <tr key={receta.id}><td>{receta.id}</td><td>{receta.name}</td><td>{receta.difficulty}</td><td>{receta.cuisine}</td><td><button onClick={ (e) => navegar(`/Recipie/${receta.id}`)} className='btn btn-primary'>Ver Receta</button>&nbsp;&nbsp;<button onClick={ (e) => navegar(`/Update/${receta.id}`)} className='btn btn-primary'>Actualizar</button>&nbsp;&nbsp;<button onClick={(e)=> navegar(`/delete/${receta.id}`)} className='btn btn-danger'>Eliminar</button></td></tr>
                ))}
        </tbody>
      </table>
      <br />
      <button onClick={ (e) => navegar('/create')} className='btn btn-success'>Añadir Alumno</button>
    </div>
  );
};

export default Read;