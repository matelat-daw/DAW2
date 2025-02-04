import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { getAlumnos, updateAlumno, getGrupos } from '../services/Service';
import { getRecetas, updateReceta } from '../services/Service';

const Update = () => {
  const [formData, setFormData] = useState({ name: '', difficulty: '', cuisine: '' });
//   const [ingredients, setItems] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      const recetas = await getRecetas();
      const receta = recetas.find((receta) => receta.id === parseInt(id));
      if (receta)
      {
        setFormData(receta);
      }
      else
      {
        console.error('Receta no encontrada');
      }
    };
    fetchItem();
  }, [id]);

//   useEffect(() => {
//         const fetchItems = async () => {
//           const data = await getIngredients();
//           setItems(data);
//         };
//         fetchItems();
//       }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateReceta(parseInt(id), formData);
    navigate('/read');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
        <br /><br />
        <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} placeholder="Dificultad" />
        <br /><br />
        <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="Tipo de Cocina" />
        <br /><br />
        {/* <select name="grupo" id="grupo" placeholder="Grupo" value={formData.grupo} onChange={handleChange} required>
            <option value={""}>Selecciona un Grupo</option>
            { grupos.map( (grupo, i) => <option key={`${i}+${grupo}`} value={grupo}>Grupo: {grupo}</option>)}
        </select> */}
        <br /><br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default Update;