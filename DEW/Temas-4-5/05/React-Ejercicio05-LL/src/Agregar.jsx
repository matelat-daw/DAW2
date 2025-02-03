import { grupos } from "./App";
import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Agregar({alumnos, setAlumnos}) {

    const navigate = useNavigate();
    const location = useLocation();
    const grupo = location.state?.grupo;
    const [datosAlumno, setAlumno] = useState({ id: '', nombre: '', grupo: grupo,SioNo: false });
    const [errors, setErrors] = useState({});

    function setData(e){
        const { name, value, type, checked } = e.target;
        setAlumno({ ...datosAlumno,
            [name]: type === 'checkbox' ? checked : value});
    }

    function agregarAlumno(e){
        e.preventDefault();
        
        const { id, nombre, grupo, SioNo} = datosAlumno;
        let errors = {};
    
        if (!id) {
            errors.id = 'El ID es obligatorio.';
        } else if (!!alumnos.find((alumno) => alumno.id == datosAlumno.id)) {
            errors.id = 'El ID introducido ya existe.';
        }
    
        if (!nombre) {
            errors.nombre = 'El nombre es obligatorio.';
        } else if (nombre.length < 4 || nombre.length > 20) {
            errors.nombre = 'El nombre debe tener entre 4 y 20 caracteres.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        setAlumnos(alumnos => [...alumnos, datosAlumno]);
    
        navigate(`/grupo/${grupo}`);
    }

    return (
        <>
            <h1>Agregar alumno</h1>
            <form action="" className="form" onSubmit={(e) => agregarAlumno(e)}>
                <div>
                    <label htmlFor="id">ID </label>
                    <input type="text" name="id" id="id" value={datosAlumno.id} onChange={(e) => setData(e)}/>
                    {errors.id && <span>{errors.id}</span>}
                </div>
                <div>
                    <label htmlFor="nombre">Nombre </label>
                    <input type="text" name="nombre" id="nombre" value={datosAlumno.nombre} onChange={(e) => setData(e)}/>
                    {errors.nombre && <span>{errors.nombre}</span>}
                </div>
                <div>
                    <label htmlFor="grupo">Grupo </label>
                    <select name="grupo" id="grupo" onChange={(e) => setData(e)} defaultValue={grupo}>
                        {grupos.map((grupo) =>
                            <option key={grupo} value={grupo}>{grupo}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="SioNo">Si o No</label>
                    <input type="checkbox" name="SioNo" id="SioNo" checked={datosAlumno.SioNo} onChange={(e) => setData(e)}/>
                </div>
                <input type="submit" value="Añadir" className="button"/>
            </form>
            <Link to={`/grupo/${grupo}`} className='button'>Volver</Link>
        </>
    )

}