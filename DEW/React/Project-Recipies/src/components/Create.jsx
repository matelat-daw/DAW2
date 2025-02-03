import React, { useEffect, useState } from 'react';
// import { createAlumno, getGrupos } from '../services/Service';
import { createReceta, } from '../services/Service';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', description: '' });
    // const [grupos, setItems] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAlumno(formData);
    // Redirigir o actualizar la lista después de crear
    navigate("/read");
  };

//   useEffect(() => {
//       const fetchItems = async () => {
//         const data = await getGrupos();
//         setItems(data);
//       };
//       fetchItems();
//     }, []);

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
        <br /><br />
        {/* <input name="grupo" value={formData.grupo} onChange={handleChange} placeholder="Grupo" />
        <br /><br /> */}

        {/* <label htmlFor="grupo">Grupo:</label> */}
        {/* <select name="grupo" id="grupo" placeholder="Grupo" onChange={handleChange} required>
            <option value={""}>Selecciona un Grupo</option>
            { grupos.map( (grupo, i) => <option key={`${i}+${grupo}`} value={grupo}>Grupo: {grupo}</option>)}
        </select> */}

        <br /><br />
        <button type="submit" className='btn btn-success'>Create</button>
      </form>
    </div>
  );
};

export default Create;