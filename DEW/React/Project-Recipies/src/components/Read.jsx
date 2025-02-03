import React, { useEffect, useState } from 'react';
// import { getAlumnos } from '../services/Service';
import { getReceta } from '../services/Service';
import { useNavigate } from 'react-router-dom';
import toast from '../services/js/script.js';

const Read = () => {
    const navegar = useNavigate();
//   const [alumnos, setItems] = useState([]);
const [recetas, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getReceta();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
            <tr><th>ID</th><th>Nombre</th><th>Grupo</th><th>Acciones</th></tr>
        </thead>
        <tbody>
        {/* <script>{toast(0, "SÍ: ", "Se Han Cargado los Datos.")}</script> */}
                {recetas.map((receta) => (
                    <tr key={receta.id}><td>{receta.id}</td><td>{receta.nombre}</td><td>{receta.tipoCocina}</td><td><button onClick={ (e) => navegar(`/Update/${receta.id}`)} className='btn btn-primary'>Actualizar</button>&nbsp;&nbsp;<button onClick={(e)=> navegar(`/delete/${receta.id}`)} className='btn btn-danger'>Eliminar</button></td></tr>
                ))}
        </tbody>
      </table>
      <br />
      <button onClick={ (e) => navegar('/create')} className='btn btn-success'>Añadir Alumno</button>
    </div>
  );
};

export default Read;