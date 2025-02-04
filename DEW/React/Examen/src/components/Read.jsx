import React, { useEffect, useState } from 'react';
import { getAlumnos } from '../services/Service';
import { useNavigate } from 'react-router-dom';
import toast from '../services/js/script.js';

const Read = () => {
    const navegar = useNavigate();
    const [alumnos, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getAlumnos();
      setItems(data);
    };
    fetchItems();
  }, []); // Carga la lista de alumnos desde Service.jsx (getAlumnos()) al cargar la página.

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table>
        <thead>
            <tr><th>ID</th><th>Nombre</th><th>Grupo</th><th>Acciones</th></tr>
        </thead>
        <tbody>
            {alumnos.map((alumno, i) => (
                <tr key={i}><td>{alumno.id}</td><td>{alumno.nombre}</td><td>{alumno.grupo}</td><td><button onClick={(e) => navegar(`/create/${alumno.id}`)} className='btn btn-primary'>Actualizar</button>&nbsp;&nbsp;<button onClick={(e)=> navegar(`/delete/${alumno.id}`)} className='btn btn-danger'>Eliminar</button></td></tr>
            ))}
        </tbody>
      </table>
      <br />
      <button onClick={(e) => navegar('/create')} className='btn btn-success'>Añadir Alumno</button>
    </div>
  );
};

export default Read;