import React, { useEffect, useState } from 'react';
import { createReceta, getRecetas, } from '../services/Service';
import { useParams, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', difficulty: '', cuisine: '' });
    const { id } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createReceta(formData);
    // Redirigir o actualizar la lista después de crear
    navigate("/read");
  };

useEffect(() => {
    if (id)
    {
        const fetchItem = async () => {
        const recetas = await getRecetas();
        const receta = recetas.find((receta) => receta.id === parseInt(id));
            if (receta)
            {
                setFormData(receta);
            }
            else
            {
                console.error('Receta no Encontrada.');
            }
        };
        fetchItem();
    }
}, [id]);

  return (
    <div>
      <h2>Receta Nueva Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
        <br /><br />
        <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} placeholder="Dificultad" required />
        <br /><br />
        <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="Tipo de Cocina" required />
        <br /><br />
        <button type="submit" className='btn btn-success'>Agregar Receta</button>
      </form>
    </div>
  );
};

export default Create;