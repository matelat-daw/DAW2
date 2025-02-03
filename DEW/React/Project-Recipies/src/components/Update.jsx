import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAlumnos, updateAlumno, getGrupos } from '../services/Service';

const Update = () => {
  const [formData, setFormData] = useState({ nombre: '', grupo: '' });
  const [grupos, setItems] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      const alumnos = await getAlumnos();
      const alumno = alumnos.find((alumno) => alumno.id === parseInt(id));
      if (alumno)
      {
        setFormData(alumno);
      }
      else
      {
        console.error('Alumno no encontrado');
      }
    };
    fetchItem();
  }, [id]);

  useEffect(() => {
        const fetchItems = async () => {
          const data = await getGrupos();
          setItems(data);
        };
        fetchItems();
      }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAlumno(parseInt(id), formData);
    navigate('/read');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
        <br /><br />
        <select name="grupo" id="grupo" placeholder="Grupo" value={formData.grupo} onChange={handleChange} required>
            <option value={""}>Selecciona un Grupo</option>
            { grupos.map( (grupo, i) => <option key={`${i}+${grupo}`} value={grupo}>Grupo: {grupo}</option>)}
        </select>
        <br /><br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default Update;