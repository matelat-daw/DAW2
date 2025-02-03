import { grupos } from "./App";
import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

export default function Editar({alumnos, setAlumnos}) {

    const {id} = useParams();
    const alumno = alumnos.find((alumno) => alumno.id == id);
    const navigate = useNavigate();
    const location = useLocation();
    const grupo = location.state?.grupo || "A";
    const [datosAlumno, setAlumno] = useState({ id: '', nombre: '', grupo: '', SioNo: false });
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        if (alumno) {
            setAlumno({ ...alumno });
        } else {
            navigate(`/daw2`)
        }
    }, [alumnos]);

    function setData(e){
        const { name, value,type, checked} = e.target;
        setAlumno({ ...datosAlumno, 
            [name]: type === 'checkbox' ? checked : value});
    }

    function editarAlumno(e){
        e.preventDefault();
        const { id, nombre, grupo, SioNo } = datosAlumno;
        let errors = {};
    
        if (!nombre || nombre.length < 4 || nombre.length > 20) {
            errors.nombre = 'El nombre debe tener entre 4 y 20 caracteres.';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        setAlumnos((prevAlumno) =>
            prevAlumno.map((alumno) =>
                alumno.id == id ? datosAlumno : alumno
            )
        );
    
        navigate(`/grupo/${grupo}`);
    }

    return (
        <>
            <h1>Editar alumno</h1>
            <form action="" className="form" onSubmit={(e) => editarAlumno(e)}>
                <input type="hidden" name="id" id="id" value={id}/>
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
                <input type="submit" value="Confirmar" className="button"/>
            </form>
            <Link to={`/grupo/${grupo}`} className='button'>Volver</Link>
        </>
    )
}