import React, { useEffect, useState } from 'react';
import { createAlumno, getAlumnos, getGrupos } from '../services/Service';
import { useParams, useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ nombre: '', grupo: '' }); // Verifica el satdo de los campos del formulario.
    const [grupos, setItems] = useState([]); // Verifica el estado de los grupos.
    const { id } = useParams(); // Pasa la ID por la URL (por segmento. Ejemplo: /create/1)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Se llama cada vez que se produce un cambio en los campos del formulario.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAlumno(id, formData);
    navigate("/read"); // Se llama al enviar el formulario, si existe algún error, devuelve el formulario con los datos.
  };

    useEffect(() => {
        if (id)
        {
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
        }
      }, [id]); // Si se recibe una ID por parametro (por la URL), Llama al método getAlumnos() de Service.jsx se carga el alumno con la ID en formData y se rellenan los campos del formulario con esos datos. Si no se recibe una ID se Agrega un Nuevo Alumno.

  useEffect(() => {
      const fetchItems = async () => {
        const grupo = await getGrupos();
        setItems(grupo);
      };
      fetchItems(); // Se llama al cargar la página para cargar los grupos, llama al Método getGrupos() de Service.jsx.
    }, []);

  return (
    <div>
      <h2>Agrega/Modifica un Alumno</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
        <br /><br />
        <select name="grupo" id="grupo" placeholder="Grupo" value={formData.grupo} onChange={handleChange} required>
            <option value={""}>Selecciona un Grupo</option>
            { grupos.map( (grupo, i) => <option key={`${i}+${grupo}`} value={grupo}>Grupo: {grupo}</option>)}
        </select>
        <br /><br />
        <button type="submit" className='btn btn-success'>Enviar</button>
      </form>
    </div>
  );
};

export default Create;